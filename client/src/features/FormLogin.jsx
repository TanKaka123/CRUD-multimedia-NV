import React, { useState } from "react";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { login as loginApi } from "../api/Authen";
import { useNavigate } from "react-router-dom";


const FormLogin = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setStatus(false);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi(setCurrentUser, setStatus, inputs.username, inputs.password);
  };

  var textWarning = "";
  if (status === 200) 
    navigate("/");
  if (!status) textWarning = "";
  else if (status == 400 || status == 500)
    textWarning = "Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại";
  
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={require("../assets/image/banner_login.png")}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form style={{ minWidth: "80%" }}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        ĐĂNG NHẬP &#10084;
                      </h5>
                      {textWarning ? (
                        <p className="alert alert-danger">{textWarning}</p>
                      ) : (
                        <div style={{ height: "75px" }}> </div>
                      )}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Nhập tài khoản nò
                        </label>
                        <input
                          type="username"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          name="username"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Nhập mật khẩu nò
                        </label>
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          name="password"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Đăng nhập nè
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        {" "}
                        <p style={{ color: "blue" }}>Quên mật khẩu rồi ?</p>
                      </a>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg"
                      >
                        {" "}
                        <Link to="/register" className="nav-link ">
                          Chưa có tài khoản
                        </Link>
                      </button>
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
