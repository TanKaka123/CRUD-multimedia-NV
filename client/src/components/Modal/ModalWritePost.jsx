import React from "react";
import "./ModalWritePost.css";
import { useNavigate } from "react-router-dom";

const ModalWritePost = ({ showModal, setModal }) => {
  const navigate = useNavigate();
  const handleClick = (urlRedirect) => {
    navigate(urlRedirect);
    setModal(false); 
  };
  return (
    <div
      className="container_modal"
      style={!showModal ? { display: "none" } : {}}
    >
      <div className="shadow modal_main">
        <button
          className="btn btn-outline-dark btn-lg button_modal"
          onClick={() => handleClick("write-blog")}
        >
          BLOG
        </button>
        <button
          className="btn btn-outline-dark btn-lg button_modal"
          onClick={() => handleClick("write-vlog")}
        >
          VLOG
        </button>
        <button
          className="btn btn-outline-dark btn-lg "
          onClick={() => handleClick("write-review")}
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default ModalWritePost;
