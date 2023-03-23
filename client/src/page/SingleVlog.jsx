import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { getVlog, deleteVlog } from "../api/Vlog";
import { BsFillTrashFill } from "react-icons/bs";
import parse from "html-react-parser";



const SingleVlog = () => {


  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  ); 


  const navigate = useNavigate();
  let { id_log } = useParams();

  const [itemVlog, setItemVlog] = useState(null);
  const [statusDelete, setStatusDelete] = useState(false);
  useEffect(() => {
    getVlog(id_log, setItemVlog);
  }, []);

const handleDeletePost = ()=>{
  deleteVlog(id_log, itemVlog.thumbnail,setStatusDelete )
}
useEffect(()=>{
  if(statusDelete)
  {
    navigate('/');
  }
},[statusDelete]);

  return (
    <div
      style={{ width: "100%", backgroundColor: "black", minHeight: "100vh" }}
    >
      <div class="container " style={{ paddingTop: "35px" }}>
        <div  style={{ display:"flex", justifyContent:"space-between"}}> 
          <button class="btn btn-link" style={{ textDecoration: "none", marginBottom: "20px"}} >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
              to="/list-vlog"
            >
              <IoIosArrowBack style={{ fontSize: "30px" }} />
              Trở lại
            </Link>
          </button>
     {    currentUser && currentUser.is_admin && <div style={{    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "15px",}} >
            <button
              className="btn btn-outline-primary btn-lg"
              // onClick={handleDeletePost}
            >
              Cập nhật <BsFillTrashFill size="20px" />
            </button>
            <button
              className="btn btn-outline-danger btn-lg"
              onClick={handleDeletePost}
            >
              Xóa <BsFillTrashFill size="20px" />
            </button>
          </div>  }
        </div>
        {itemVlog && (
          <div class="row justify-content-center align-items-center z">
            <div class="col-md-12 col-lg-12 col-xl-8 col-xxl-8 col-xs-8 col-sm-12">
              <iframe
                title="This is a unique title"
                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                src={itemVlog.video_url}
                style={{ width: "100%", height: "500px" }}
              ></iframe>
            </div>
            <div
              class="col-md-12 col-lg-12 col-xl-4 col-xxl-4 col-xs-4 col-sm-12"
              style={{
                color: "white",
                overflow: "scroll",
                height: "500px",
              }}
            >
              <b>
              {itemVlog.title}
              </b>
              <br/>
              {parse(itemVlog.content)}
            </div>
          </div>
        )}
      </div>
    </div>
  ); 
};

export const styles={
  flex:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
  },
  flex_no_gap:{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "space-around",
  
}
}
export default SingleVlog;
