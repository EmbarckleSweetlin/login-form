import React from "react";
import './dashboard.css';
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import axios from 'axios';

export function Dashboard() {
  const navigate = useNavigate();
  // const { state }  = useLocation();
  
  const handleClick = () => {
  const confirm = window.confirm('Are you sure to logout');
    if(confirm){
      navigate('/');
    }
    else{
      navigate('/dashboard')
    }
  }
  // const handlesignout = () => {
  //  const confirm = window.confirm('Are you sure to signout');
  //   if(confirm){
  //     // axios.post('http://localhost:3500/delete', {
  //     // email: state.email
  //     // email: state.email

  //     // })
  //     // .then((res)=>{
  //     //   alert(res.data);
  //       navigate('/signup');
  //     // })
  //   } else{ 
  //     navigate('/dashboard')
  //   }
  // }

  return( <div>
    <div id="button-handle">
    <button id="logoutButton" onClick={handleClick}>Logout</button>
  {/* <button id="signoutButton" onClick={handlesignout}>signout</button> */}
  </div>
    <div id="dashboard-nav">
  <h1 id="dashboard-head">Dashboard</h1>
  </div>
  </div>
  )
}
