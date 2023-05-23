import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './forgetPassword.css';


export function NewPassword() {
const [email, setEmail] = useState();
const [newpassword, setNewpassword] = useState();
const [confirmpassword, setConfirmpassword] = useState();
const navigate = useNavigate();

const handleClick = () =>{
    navigate('/')
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(newpassword===confirmpassword){
axios
.post("http://localhost:3500/forgetpassword",{
    email:email,
    newpassword:newpassword,
}).then((res)=>{
    if(res.data==="Mail sent successfuly"){
        alert(res.data);
        navigate('/verify', {
            state: { email, newpassword },
          });
       
    } else if(res.data==="error/you don't have an account, please signup"){
        alert(res.data);
        navigate('/signup'); 
    } 
}).catch((err)=> {
    alert(err);
})
    } else{
        alert('password did not match ');
    }
}
    return(
        <div id="forgetPage-container">
        <h1 id="forget-head">Reset your Password</h1>
        <form id="forgetpassword-form" onSubmit={handleSubmit}>
            <label class="forget-label" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$">Email</label>
            <input id="forget-emailInput" className="forget-input" type="email" placeholder="enter valid mail address" onChange={(e)=>{setEmail(e.target.value)}} required></input>
            <label class="forget-label">New Password</label>
            <input id="forget-passInput" className="forget-input" type="password" placeholder="create new password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={(e)=>{setNewpassword(e.target.value)}} required></input>
            <label className="forget-label">Confirm Password</label>
            <input id="forget-confirmInput" className="forget-input" type="password" placeholder="Enter password" onChange={(e)=>{setConfirmpassword(e.target.value)}} required></input>
            <input id="forget-submit" type="submit"></input>
            <button id="cancel-button" onClick={handleClick}>Cancel</button>
        </form>
        </div>
    )
}
