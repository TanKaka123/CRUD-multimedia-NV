import React, { useState } from "react";
import "../assets/css/listpost.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Title from "../components/Title";
import { getBlogs } from "../api/Blog";




const FirstBlog = ({value}) =>{
    
    const getText=(html)=>{
        const doc = new DOMParser().parseFromString( html ,"text/html")
        return doc.body.textContent
      }
        const linkTo = `/list-blog/${value.id}`;
        return (
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" style={{ marginLeft:"1%"}}>
            <Link className="cards item_wrapper" to={linkTo}>
              <span className="img-card" style={{height:"300px"}}>
                <img src={value.thumbnail}  />
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
}
const SecondBlog = ({value}) =>{
    
    const getText=(html)=>{
        const doc = new DOMParser().parseFromString( html ,"text/html")
        return doc.body.textContent
      }
        const linkTo = `/list-blog/${value.id}`;
        return (
          <div >
            <Link className="cards item_wrapper" to={linkTo}>
              <span className="img-card">
                <img src={value.thumbnail} />
              </span>
              <div className="card-content" style={{height:"200px"}}>
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
}
const Home = () => {
    
    const [listBlog, setListBlog] = useState(null);
  

    useEffect(() => {
      window.scrollTo(0, 0)
      getBlogs(setListBlog);
    }, [])
    return (
        <div>
            <img src={require('../assets/image/banner.png')} style={{width:"98%", marginLeft:"1%"}}/>
             <p style={{textAlign:"center", marginBottom:"20px", marginTop:"20px", fontSize:"30px", fontWeight:"300"}} >Một đám mây nhỏ.... </p>
            {/* <ListPost/> */} 

            {
                listBlog && 
                <div style={{display:"flex", gap:"30px", alignItems:"flex-start", justifyContent:"center" ,margin:"1%",flexWrap:"wrap", marginTop:"100px"}}>
                   
                   <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" >
                    
                  { listBlog[0]&& < SecondBlog value ={listBlog[0]}/>}
                      {listBlog[2] && < SecondBlog value ={listBlog[2]}/>}  
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" >
                  {  listBlog[1]&&  < SecondBlog value ={listBlog[1]}/>}
                     {listBlog[2] && < SecondBlog value ={listBlog[2]}/>}
                    </div>
                
                    </div>
            }
        </div>
    );
};

export default Home;