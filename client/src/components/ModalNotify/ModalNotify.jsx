import React from "react";
import "./ModalNotify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ModalWritePost = ({ showModal, setModal }) => {
  const navigate = useNavigate();
  const handleClick = (urlRedirect) => {
    if(urlRedirect!="write-blog")
    {
      navigate(urlRedirect);
    }
    setModal(false);
  };
  return (
    <div
      className="container_modal_notify"
      style={!showModal ? { display: "none" } : {}}
    >
      <div className="shadow modal_main">
        <p style={{textAlign:"center", marginBottom:"40px", fontSize:"20px", fontWeight:"500"}}> 
          Chúc mừng bạn đã đăng bài thành công.
          <br /><br />
          Bạn muốn quay lại trang chủ chứ ?
        </p>
        <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"20px"}}> 
          <button onClick={() => handleClick("/")} className=" btn btn-outline-primary">
            Okeee
          </button>
          
          <button to="/write-blog" className="btn btn-outline-secondary " onClick={() => handleClick("write-blog")}>
            Honggg
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWritePost;
