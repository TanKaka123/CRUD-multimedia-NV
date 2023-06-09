import React, { useState } from "react";
import "../assets/css/listpost.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { getBlogs } from "../api/Blog";

const SecondBlog = ({ value }) => {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  const linkTo = `/list-blog/${value.id}`;
  return (
    <div>
      <Link className="cards item_wrapper" to={linkTo}>
        <span className="img-card">
          <img src={value.thumbnail} />
        </span>
        <div className="card-content" style={{ height: "200px" }}>
          <div className="card-title item_title" style={{ height: "60px" }}>
            <span className="width ellipse two-lines"> {value.title} </span>
          </div>
          <span className="width ellipse two-lines">
            {getText(value.content)}
          </span>
        </div>
        <div className="card-read-more item_time">
          <p style={{ marginBottom: "0" }}>{value.created_at}</p>
          <p style={{ marginBottom: "0" }}>
            {value.numberLove}
            <AiOutlineHeart style={{ fontSize: "20px", color: "#FF577F" }} />
          </p>
        </div>
      </Link>
    </div>
  );
};
const Home = () => {
  const [listBlog, setListBlog] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogs(setListBlog);
  }, []);
  return (
    <div>
      <img src={require("../assets/image/banner.png")}
        style={{ width: "100%"  }}
      />
      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "30px",
          fontWeight: "300",
        }}
      >
        Một đám mây nhỏ....
      </p>

      {listBlog && (
        <div style={{ marginTop: "100px" }} className="grid-container">
          {listBlog.length-1>=0  && <SecondBlog value={listBlog[listBlog.length-1]} />}
          {listBlog.length-2>=0 && <SecondBlog value={listBlog[listBlog.length-2]} />} 
          {listBlog.length-3>=0 && <SecondBlog value={listBlog[listBlog.length-3]} />}
          {listBlog.length-4>=0 && <SecondBlog value={listBlog[listBlog.length-4]} />}
        </div>
      )}
    </div>
  );
};

export default Home;
