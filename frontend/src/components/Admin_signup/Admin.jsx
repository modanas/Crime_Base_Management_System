import React, { useState } from "react";
import "./Admin.css";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaLock } from "react-icons/fa";


import axios from "axios"



const Admin = () => {

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event =>{
    event.preventDefault()
    const data = {
      full_name:fullname,
      email:email,
      phone_num:phonenumber,
      password:password,
     
  
    }
  
    axios.post("http://localhost:5000/admin/signup",data)
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
    <div id="admin">
      <div className="admin-cont">
        <form onSubmit={handleSubmit}>
          <GiPoliceOfficerHead className="admin-icon" />
          <h1>sign up</h1>

          <div className="admin-form-wrapper">
          <div className="admin-input-wrapper-cont">
              <div className="admin-input-wrapper">
                <FaUserPen className="admin-input-icon" />
                <input
                  type="text"
                  placeholder="full name"
                  name="fullname"
                  id="fullname"
                  onChange={e=> setFullName(e.target.value)} value={fullname}
                />
              </div>
              <div className="admin-input-wrapper">
                <MdEmail className="admin-input-icon" />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  onChange={e=> setEmail(e.target.value)} value={email}
                />
              </div>
              <div className="admin-input-wrapper">
                <MdLocalPhone className="admin-input-icon" />
                <input
                  type="text"
                  placeholder="phone number"
                  name="phonenumber"
                  id="phonenumber"
                  onChange={e=> setPhoneNumber(e.target.value)} value={phonenumber}
                />
              </div>
              <div className="admin-input-wrapper">
                <FaLock className="admin-input-icon" />
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  id="password"
                  onChange={e=>setPassword(e.target.value)} value={password}
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

export default Admin;
