import React, { useState, useEffect } from "react";
import { PostReview } from "../api/Review";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadImage from "../features/UploadImage";
import { uploadImage as UploadImageApi}  from "../api/UploadImage";
import Spinner from "../components/Spinner/Spinner";

const WriteReview = () => {
    const [ valueQuill, setValueQuill ] = useState("");
    const [ openLoading, setOpenLoading ] = useState(false);
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user") || null)
    );
  const initValue = {
    title:'',
    url_product:'',
    thumbnail:'',
    content:'',
    video_url:' '  
  }
    const [ inputs, setInputs ] = useState(initValue);
    const [ imageUrl, setImageUrl ] = useState(null); 
  
    const handleChange = (e) =>{ 
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  
    const handleSubmit =()=>{
      setInputs((prev) => ({ ...prev, "content": valueQuill }));
    }
  
    const isEmpty = Object.values(inputs).every(x => (x !== null && x !== ''));
    if(isEmpty)
    {
      UploadImageApi(inputs, setImageUrl);
      setOpenLoading(true)
    }
  
    useEffect(()=>{
     
      if(imageUrl && isEmpty)
      {
        console.log(inputs.thumbnail)
        PostReview(inputs, imageUrl, currentUser);
        setInputs(initValue);
      }
      setImageUrl(null)
    },[ imageUrl ]);
  
    
    return (
        <div className="row justify-content-center" >
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6">
            <input type="text"  name="title" className="form-control" style={{borderRadius:"0px", marginBottom:"20px"}} id="inputGroupFile01" placeholder="Title" onChange={handleChange}/>
            <input type="text" name="url_product" className="form-control"  style={{borderRadius:"0px", marginBottom:"20px"}} id="inputGroupFile01" placeholder="URL Sản phẩm" onChange={handleChange}/>
            <ReactQuill them="snow" value={valueQuill} onChange={setValueQuill} style={{height:"300px"}}/> 
            {/* <button type="button" className="btn btn-dark" style={{borderRadius:"0px", marginTop:"80px", width:"100%"}}>Đăng bài</button>      */}
        </div>
        <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 " >
            <div className="card border" style={{borderRadius:"0px", padding:"10px"}}>
                <h1>Hình ảnh</h1>
                <UploadImage setInputs={setInputs} />
                <button type="button" className="btn btn-dark" style={{borderRadius:"0px"}}
                onClick={handleSubmit}>Đăng bài</button>
            </div>
        </div>
    </div>
    );
};

export default WriteReview;