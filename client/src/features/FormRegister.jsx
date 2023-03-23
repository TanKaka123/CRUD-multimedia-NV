import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
import { redirect, useNavigate   } from "react-router-dom";
import { register as registerAccount } from '../api/Authen';


const FormLogin = () => {
  const [status, setStatus] = useState(false);
  const [inputs, setInputs] = useState({
    username :"",
    password :"",
    email :"",
    fullname:""
  })

  const handleChange = (e) =>{
    setStatus(false);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    registerAccount(inputs, setStatus);
  }

  const navigate = useNavigate();
  var textWarning = "";
  if (status === 200) 
    navigate("/login");
  if (!status) textWarning = "";
  else if (status == 409)
    textWarning = "Tài khoản đã tồn tại, vui lòng chọn tài khoản khác";

  

    return (
        <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={require("../assets/image/banner_register.png")}
                      alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form style={{minWidth:"80%"}}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i> 
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>ĐĂNG KÍ TÀI KHOẢN &#10084;</h5>
                        {textWarning ? (
                        <p className="alert alert-danger">{textWarning}</p>
                      ) : (
                        <div style={{ height: "75px" }}> </div>
                      )}
                        <div className="form-outline mb-4">
                          <input type="username" id="form2Example17" className="form-control form-control-lg" name="fullname" onChange={handleChange} 
                          placeholder="Họ và Tên"/>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="username" style={{width:"100%"}} id="form2Example117" className="form-control form-control-lg" name="username" onChange={handleChange} 
                          placeholder="Tên đăng nhập"/>
                        </div>
                        <div className="form-outline mb-4 ">
                          <input type="username" id="form2Example127" className="form-control form-control-lg" name="email" onChange={handleChange} 
                          placeholder="Email"/>
                        </div>
                        
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" onChange={handleChange}
                           placeholder="Mật khẩu"/>
                        </div>
      
                        <div className="pt-1 mb-4" style={{marginTop:"50px"}} >
                            <button className="btn btn-outline-dark  btn-lg btn-block" style={{marginRight:"20px"}} type="button"  onClick={() => navigate(-1)} >Quay lại</button>
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleSubmit}>Đăng kí</button> 
                        </div> 
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FormLogin; 