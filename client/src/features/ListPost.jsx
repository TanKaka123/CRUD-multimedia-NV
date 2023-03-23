import React from "react";
import "../assets/css/index.css"

const ListPost = () => {
  return (
    <div class="row" style={{paddingLeft:"30px", color: "white"}}>
      <div class="col-sm-6 mb-3 mb-sm-0">
      <a class="card" style={{cursor:"pointer", textDecoration:"none", color: "white"}}>
          <div class="card-body" >
            <div class="card" style={{ width: "25rem", height: "25rem",backgroundColor:"black", borderRadius:"0px" }}>
              <img
                src={require("../assets/image/activity/1.png")}
                class="card-img-top"
                alt="item"
              />
              <div class="card-body" >
              <p class="card-text" style={{fontWeight:"bold", fontSize:"20px", textAlign : "center"}}>
                  TITLE OF THE CARD
                </p>
               
                    <p class="card-text" >
                    The short description about community project
                    </p>
               
                <button style={{margin:"auto"}}>
                    <p class="card-text" style={{fontWeight:"bolder", fontSize:"18px", padding:"10px"}}>Tìm hiểu thêm &#x3e;</p>
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-sm-6">
      <a class="card" style={{cursor:"pointer", textDecoration:"none", color: "white"}}>
          <div class="card-body" >
            <div class="card" style={{ width: "25rem", height: "25rem",backgroundColor:"black", borderRadius:"0px" }}>
              <img
                src={require("../assets/image/activity/1.png")}
                class="card-img-top"
                alt="item"
              />
              <div class="card-body" >
              <p class="card-text" style={{fontWeight:"bold", fontSize:"20px", textAlign : "center"}}>
                  TITLE OF THE CARD
                </p>
               
                    <p class="card-text" >
                    The short description about community project
                    </p>
               
                <button style={{margin:"auto"}}>
                    <p class="card-text" style={{fontWeight:"bolder", fontSize:"18px", padding:"10px"}}>Tìm hiểu thêm &#x3e;</p>
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ListPost;
