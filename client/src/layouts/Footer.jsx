import React from "react";
import "../assets/css/index.css";
import { useLocation } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentURL = useLocation().pathname;
  return (
    <>
      {/* {currentURL.includes("listvlog/") ? (
        <div></div>
      ) : ( */}
        <footer className="text-center text-lg-start bg-white text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block"></div>
            <div>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
                  <a
                    href=""
                    style={{  }}
                  >
                    <img
                      src={require("../assets/image/logo_image.png")}
                      style={{ width: "150px" }}
                    />
                  </a>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <a
                      href="https://www.facebook.com/nguyenvancloud"
                      target="_blank"
                    >
                      <ImFacebook2 className="icon-nav" />
                    </a>
                    <a
                      href="https://www.instagram.com/_mizzzz01/?fbclid=IwAR3PgytqpGRggGUKDpTURtAyEoklkCtbdc-okAj29nwDgmnAosTSwjg94RA"
                      target="_blank"
                    >
                      <GrInstagram className="icon-nav" />
                    </a>
                    <FaTiktok className="icon-nav" />
                    <ImYoutube className="icon-nav" />
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    BÀI VIẾT MỚI NHẤT
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      TITLE OF BLOG 1 | BLOG | MÂY
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      TITLE OF BLOG 1 | BLOG | MÂY
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      TITLE OF BLOG 1 | BLOG | MÂY
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">CHIA SẺ</h6>
                  <p style={{}}>
                    <span style={{ fontStyle: "italic", fontSize: "18px" }}>
                      Nếu cậu có câu chuyện muốn chia sẻ hay cảm nhận của cậu
                      khi đến với Vân Mây Đây, vui lòng gửi về địa chỉ :
                    </span>

                    <a
                      style={{
                        color: "#FD7F38",
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontSize: "20px",
                      }}
                    >
                      vannmayday@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="">
              TanKaka123
            </a>
          </div>
        </footer>
    
    </>
  );
};

export default Footer;
