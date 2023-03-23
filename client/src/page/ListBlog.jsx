import React, { useState } from "react";
import "../assets/css/listpost.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Title from "../components/Title";
import { getBlogs } from "../api/Blog";
import Spinner from "../components/Spinner/Spinner";


function ListBlog() {
  const [listBlog, setListBlog] = useState(null);
  const [ openLoading, setLoading ] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogs(setListBlog, setLoading);
    
  }, []);

  const getText=(html)=>{
    const doc = new DOMParser().parseFromString( html ,"text/html")
    return doc.body.textContent
  }


  
    return (
    <section className="wrapper">
      {openLoading &&  <Spinner/>}
      <div className="container-fostrap">
        <Title content="BLOG" />

        <div className="content" style={{ marginTop: "70px" }}>
          <div className="container">
            <div className="row">
              {listBlog  && listBlog.map((value, index) => {
               
                const linkTo = `/list-blog/${value.id}`;
                return (
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>
                    <Link className="cards item_wrapper" to={linkTo}>
                      <span className="img-card">
                        <img src={value.thumbnail} />
                      </span>
                      <div className="card-content" style={{height:"150px"}}>
                        <div
                          className="card-title item_title"
                          style={{ height: "60px" }}
                        >
                          <span  className="width ellipse two-lines"> {value.title} </span>
                        </div>
                        <span className="width ellipse two-lines">
                          {getText(value.content)}
                        </span>
                      </div>
                      <div className="card-read-more item_time">
                        <p style={{ marginBottom: "0" }}>
                          {value.created_at} 
                        </p>
                        <p style={{ marginBottom: "0" }}>
                          {value.numberLove}{" "}
                          <AiOutlineHeart
                            style={{ fontSize: "20px", color: "#FF577F" }}
                          />
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListBlog;
