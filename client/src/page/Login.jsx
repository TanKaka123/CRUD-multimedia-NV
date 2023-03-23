import React from 'react';
import FormLogin from '../features/FormLogin';
import { IoMdArrowRoundBack } from "react-icons/io";
import { redirect, useNavigate   } from "react-router-dom";
import env from "react-dotenv";

const Login = () => {
    const navigate = useNavigate();
    
    return (
       <div style={{position:"relative"}}>
        <button type="button" className="btn btn-outline-dark" style={{position:"absolute", top:45, left:45}} onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack style={{fontSize:"40px" }}/>
        </button>
        
        <FormLogin/>
       </div>
    );
};

export default Login;