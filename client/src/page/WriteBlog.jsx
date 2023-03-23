import React, { useEffect, useState } from "react";
import UploadImage from "../features/UploadImage";
import { PostBlog } from "../api/Blog";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ModalNotify from "../components/ModalNotify/ModalNotify";
import Spinner from "../components/Spinner/Spinner";

const WriteBlog = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const initValue = {
    title: "",
    thumbnail: "",
    content: "",
  };

  const [inputs, setInputs] = useState(initValue);
  const [statusPost, setStatusPost] = useState(false);
  const [openModalNotify, setOpenModalNotify] = useState(false);
  const [ openLoading, setOpenLoading ] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const notEmpty = Object.values(inputs).every((x) => x !== null && x !== "");
    if (notEmpty) {
    
      PostBlog(inputs, currentUser, setStatusPost);
      setOpenLoading(true)
    }
  };

  if (statusPost) {
    setOpenLoading(false)
    setOpenModalNotify(true);
    setStatusPost(false);
  }

  const paramsModalNotify = {
    showModal: openModalNotify,
    setModal: setOpenModalNotify,
  };
  const paramsReactQuill = {
    them: "snow",
    value: inputs.content,
  };

  return (
    <div className="row justify-content-center">
    
      {openLoading &&  <Spinner/>}
   
      <ModalNotify {...paramsModalNotify} />
      <div className="col-12 col-xxl-6 col-xl-6 col-lg-6">
        <input
          type="text"
          name="title"
          className="form-control"
          style={{ borderRadius: "0px", marginBottom: "20px" }}
          id="inputGroupFile01"
          placeholder="Title"
          onChange={handleChange}
        />
        <ReactQuill
          {...paramsReactQuill}
          onChange={(e) => {
            setInputs((prev) => ({ ...prev, content: e }));
          }}
          style={{ height: "300px" }}
        />
      </div>
      <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 ">
        <div
          className="card border"
          style={{ borderRadius: "0px", padding: "10px" }}
        >
          <h1>Hình ảnh</h1>
          <UploadImage setInputs={setInputs} />
          <button
            type="button"
            className="btn btn-dark"
            style={{ borderRadius: "0px" }}
            onClick={handleSubmit}
          >
            Đăng bài
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
