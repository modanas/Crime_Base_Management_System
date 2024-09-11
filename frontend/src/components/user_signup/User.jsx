import React, { useState } from "react";
import "./User.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoFingerPrintSharp } from "react-icons/io5";
import axios from "axios"

const User = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [adharnumber, setAdharNumber] = useState("");


  const handleSubmit = event =>{
    event.preventDefault()
    const data = {
      full_name:fullname,
      email:email,
      phone_num:phonenumber,
      password:password,
      address:address,
      adhar_num:adharnumber



    }

    axios.post("http://localhost:5000/signup",data)
    .then((response)=>{
      if(response.status===200){
        alert("register done")
      }
      else{
        alert("register failed")
      }
    }).catch((error)=>{
      alert("backend error"+error)
    })
  }

  return (
    <div id="user">
      <div className="user-cont">
        <form onSubmit={handleSubmit}>
          <FaUser className="user-icon" />
          <h1>sign up</h1>

          <div className="user-form-wrapper">
            <div className="user-input-wrapper-cont">
              <div className="user-input-wrapper">
                <FaUserPen className="user-input-icon" />
                <input
                  type="text"
                  placeholder="full name"
                  name="fname"
                  id="fname"
                  onChange={e=> setFullName(e.target.value)} value={fullname}
                />
              </div>
              <div className="user-input-wrapper">
                <MdEmail className="user-input-icon" />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  onChange={e=> setEmail(e.target.value)} value={email}
                />
              </div>
              <div className="user-input-wrapper">
                <MdLocalPhone className="user-input-icon" />
                <input
                  type="text"
                  placeholder="phone number"
                  name="pnum"
                  id="pnum"
                  onChange={e=> setPhoneNumber(e.target.value)} value={phonenumber}
                />
              </div>
              <div className="user-input-wrapper">
                <FaLock className="user-input-icon" />
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  id="password"
                  onChange={e=>setPassword(e.target.value)} value={password}
                />
              </div>
              <div className="user-input-wrapper">
                <FaLocationDot className="user-input-icon" />
                <input
                  type="text"
                  placeholder="address"
                  name="address"
                  id="address"
                  onChange={e=>setAddress(e.target.value)} value={address}
                />
              </div>
              <div className="user-input-wrapper">
                <IoFingerPrintSharp className="user-input-icon" />
                <input
                  type="text"
                  placeholder="Adhar number"
                  name="adhar_no"
                  id="adhar_no"
                  onChange={e=>setAdharNumber(e.target.value)} value={adharnumber}
                />
              </div>
              <button>Sign up</button>
              <h1>
                Already have an account ?<a href="/user_login">Login here</a>
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
