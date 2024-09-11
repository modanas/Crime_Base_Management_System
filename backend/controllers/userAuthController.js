const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { full_name, email, phone_num, password, address, adhar_num } = req.body;
  console.log(req.body)
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      full_name:full_name,
      email:email,
      password:encryptedPassword,
      phone_number:phone_num,
      address:address,
      adhar_num:adhar_num
    });

    await user.save();
    res.status(200).json({ message: "user created successfully", data: user });
  } catch (error) {
    res.status(300).json({ error: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)

  try {
    const existingUser = await User.findOne({ email: email }); //after finding email of a particular user we get the whole schema data like fullname to adhar_num all
    if (!existingUser) {
      res.send(300).json({ user: "user does not exist" });
    }
    const validPassword = bcrypt.compare(password,existingUser.password);
    if (!validPassword) {
      res.send(300).json({ error: "wrong password" });
    }

    const token = jwt.sign(
      { email: existingUser.email, full_name: existingUser.full_name },
      "jwt-secret-key",
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "login successfull", token });
  } catch (error) {
    res.status(300).json({ error: error });
  }
};

exports.logout = async(req,res)=>{
  res.clearCookie('token')
  res.status(200).json({'message':'logout successfull'})
}
