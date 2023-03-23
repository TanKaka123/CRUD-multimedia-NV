import React, { useState } from "react";
import "../assets/css/index.css";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ModalWritePost from "../components/Modal/ModalWritePost";

const Header = () => {
  // const currentURL = useLocation().pathname;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.set(null);
   
  };

  const [ showModalWrite, setShowModalWrite ] = useState(false);
 
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          marginTop: "-5px",
          zIndex: "10",
          backgroundColor: "white",
        }}
      >
        <ModalWritePost showModal={showModalWrite} setModal={setShowModalWrite} />
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
         className={`collapse navbar-collapse${isCollapsed ? '' : ' show'}`}
         id="navbarSupportedContent"
          style={{ marginTop: "10px", marginBottom: "10px" }}
         
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link"  onClick={toggleCollapse}>
                Trang chủ{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="intro" className="nav-link"  onClick={toggleCollapse}>
                {" "}
                Giới thiệu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list-blog" className="nav-link "  onClick={toggleCollapse}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list-vlog" className="nav-link "  onClick={toggleCollapse}>
                Vlog
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/contact" className="nav-link" >Liên hệ </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/review" className="nav-link">
                Gợi ý{" "}
              </Link>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            style={{ alignItems: "center" }}
          >
            <Link to="/" style={{ marginLeft: "35px", marginRight: "35px" }} className={`collapse navbar-collapse${!isCollapsed ? '' : ' show'}`} >
              <img
                src={require("../assets/image/logo_text.png")}
                style={{ width: "180px" }}
              />
            </Link>
            {currentUser && currentUser.is_admin ? (
              <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                style={{  marginRight:"20px" }}
                onClick={()=>{setShowModalWrite(!showModalWrite); toggleCollapse()}}
              >
                Viết bài
              </button>
            ) : (
              <div className={`collapse navbar-collapse${!isCollapsed ? '' : ' show'}`}>
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
                </a>{" "}
                <FaTiktok className="icon-nav" />
                <ImYoutube className="icon-nav"  style={{ marginRight: "20px" }}/>
              </div>
            )}
            {currentUser ? (
              <button
                to="/profile"
                className="btn btn-outline-dark btn-lg"
               
                onClick={()=>{handleLogout(); toggleCollapse()}}
              >
                Đăng xuất
              </button>
            ) : (
              <button 
                type="button"
                className="btn btn-outline-dark btn-lg"
              
              >
                <Link to="/login" className="nav-link ">
                  Đăng nhập
                </Link>
              </button>
            )}
          </form>
        </div>
      </nav>
      {/* } */}
    </>
  );
};

export default Header;
