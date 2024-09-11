import React, { useState } from "react";
import "./Cred.css";
import "../../App.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Cookies from 'js-cookie'

import { FaUser } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cred = () => {  

  const [pemail,setPemail]=useState('')
  const [ppass,setPpass]=useState('')
  const [uemail,setUemail]=useState('')
  const [upass,setUpass]=useState('')

  const navigate=useNavigate('/')

  const handleUserLogin=async (event)=>{
    event.preventDefault()

    const data={
      email:uemail,
      password:upass
    }

    await axios.post('http://localhost:5000/login',data).then((response)=>{
      if(response.status===200)
      {
        console.log(response)
        alert("Logged in Successful")
        Cookies.set('token',response.data.token)
        navigate('/user_dashboard')
       
        
      }
      else{
        alert("Login Failed")
      }
    }).catch((error)=>{
      alert(error)
    })
  }

  const handlePoliceLogin=async (event)=>{
        event.preventDefault()

        const data={
          email:pemail,
          password:ppass
        }

        console.log(data)

        await axios.post('http://localhost:5000/admin/login',data).then((response)=>{
          console.log(response)

          if(response.status===200)
          {
            alert("Logged in Successfully")
            Cookies.set('token',response.data.token)
            navigate('/admin_dashboard')
          }
          else{
            alert("Logged Out Successfully")
          }
        }).catch((error)=>{
          alert(error)
        })
  }
  return (
    <>
      <div id="cred">
        <Navbar />
        <div className="cred-cont">
          <div className="login-cont-wrapper">

            <form onSubmit={handleUserLogin} className="user-form">
              <FaUser className="icon" />
              <h1>public</h1>
              <div className="form-wrapper">
                <div className="input-wrapper-cont">
                  <div className="input-wrapper">
                    <MdEmail className="input-icon" />
                    <input type="text" onChange={e=>setUemail(e.target.value)} placeholder="enter your email" />
                  </div>
                  <div className="input-wrapper">
                    <FaLock className="input-icon" />

                    <input type="password" onChange={e=>setPpass(e.target.password)} placeholder="enter password" />
                  </div>
                  <a href="/user_dashboard">dashboard</a>
                  <button>Login</button>
                 
                  <h1>Not an existing user ?<a href="/user_signup">Sign up here</a></h1>
                </div>
              </div>
            </form>

            <form action="" onSubmit={handlePoliceLogin} className="admin-form">
              <GiPoliceOfficerHead className="icon" />
              <h1>police</h1>
              <div className="form-wrapper">
                <div className="input-wrapper-cont">
                  <div className="input-wrapper">
                    <MdEmail className="input-icon" />
                    <input type="email" onChange={e=>setPemail(e.target.value)} placeholder="enter your email" />
                  </div>
                  <div className="input-wrapper">
                    <FaLock className="input-icon" />

                    <input type="password" onChange={e=>setPpass(e.target.value)} placeholder="enter password" />
                  </div>
                  <a href="/admin_dashboard">dashboard</a>

                  <button>Login</button>
                  <h1>Not an existing user ?<a href="/admin_signup">Sign up here</a></h1>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cred;
