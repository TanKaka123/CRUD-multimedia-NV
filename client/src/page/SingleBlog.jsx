import React, { useEffect, useState,  } from "react";
import { AiFillEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams, useNavigate  } from "react-router-dom";
import { getBlog, increaseLove, decreaseLove, updateView, deleteBlog } from "../api/Blog";
import Comment from "../components/Comment/Comment";
import parse from "html-react-parser";
import { BsFillTrashFill } from "react-icons/bs";
import { getBlogs } from "../api/Blog";
import Spinner from "../components/Spinner/Spinner";
import "../assets/css/singBlog.css"

const SinglePost = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  let { id_log } = useParams();

  useEffect(() => {
    updateView(id_log);
  }, []);
  
  const [itemBlog, setItemBlog] = useState(null);
  const [isLoved, setIsLoved] = useState(false);
  const [diffNumberLove, setDiffNumberLove] =useState(0)
  const [statusDelete, setStatusDelete] = useState(false);
  const [listBlog, setListBlog] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    getBlog(id_log, setItemBlog);
    getBlogs(setListBlog); 
  }, []);

  const handleLove = () => {
    setIsLoved(!isLoved); 
    if(isLoved)
    {
      setDiffNumberLove(diffNumberLove-1);
      decreaseLove(id_log);
    }
    else {
      setDiffNumberLove(diffNumberLove+1); 
      increaseLove(id_log); 
    }
  };

  const handleDeletePost = () => { 
    if(itemBlog)
      deleteBlog(id_log, itemBlog.thumbnail,setStatusDelete);
  };

  useEffect(()=>{
    if(statusDelete)
    {
      navigate('/');
    }
  },[statusDelete]);

  const statusIconLove = () =>{
    if(!isLoved)
      return  <AiOutlineHeart
                    size="30px"
                    color="#FF4493" 
                  />
      return <AiFillHeart
        size="30px"
        color="#FF4493" 
      />
  }

  const handleDirect=(linkDirect)=>{
    navigate(linkDirect);
    window.location.reload();
  }

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      {!itemBlog && <Spinner />}
      <div className="row justify-content-md-center">
        {itemBlog &&   (
          <div className="col-lg-8">
            <h1>{itemBlog.title}</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={styles.blog_title}>
                <img
                  src={itemBlog.avatar_author}
                  alt="avatar"
                  style={styles.blog_avatar}
                />
                <div>
                  <span>
                    <b>{itemBlog.name_author}</b>
                  </span>
                  <p>{itemBlog.created_at}</p>
                </div>
              </div>

          { currentUser?.is_admin && <div style={styles.contain_btn_edit}>
                <button className="btn btn-outline-primary btn-lg"
                  onClick={handleDeletePost}
                >
                  Cập nhật <BsFillTrashFill size="20px" />
                </button>
                <button
                  className="btn btn-outline-danger btn-lg"
                  onClick={handleDeletePost}
                >
                  Xóa <BsFillTrashFill size="20px" />
                </button>
              </div>}
            </div>
            <img src={itemBlog.thumbnail} alt="" style={styles.blog_thumbnail} />
            <span style={{ lineHeight: "28px", marginTop: "10px" }}>
              {parse(itemBlog.content)}
            </span>
            <p style={styles.blog_text_end}>
              Nếu bài viết có ích cho bạn, nó cũng có ích cho người khác, we are
              sharing !
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {currentUser && currentUser.is_admin && (
                <p>
                  <AiFillEye size="30px" /> {itemBlog.number_view} lượt xem
                </p>
              )}
            
              <p style={{ cursor: "pointer" }} onClick={handleLove}>
                {statusIconLove()} {itemBlog.number_love + diffNumberLove} yêu thích
              </p>
            
            </div>
            <div className="row justify-content-md-center">
              <div className="form-group">
                {/* Whole component commment */}
                <Comment idLog={id_log} />
              </div>
              <div className="contain_post_relate">
                  {listBlog && listBlog.slice(0,3).map((value, index) => {
                    const linkDirect = `/list-blog/${value.id}`
                    return (
                      <div style={{cursor:"pointer"}} key={index} onClick={()=>handleDirect(linkDirect)}>
                        <img
                          src={value.thumbnail}
                          alt=""
                          style={{ maxWidth: "100%", height:"80%" }}
                        />
                        <span style={{ fontSize: "14px", color:"black", textDecoration:"none" }}>{value.title}</span>
                      </div>
                    );
                  })}
              </div>
           
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const styles = {
  blog_title: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "15px",
  },
  blog_avatar: {
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    objectFit: "cover",
  },
  blog_thumbnail: {
    maxHeight: "500px",
    width: "100%",
    objectFit: "cover",
  },
  blog_text_end: {
    borderStyle: "solid",
    borderWidth: "0px",
    borderTopWidth: "1px",
  },
  contain_post_relate:{
    display:"grid",
  },
  contain_btn_edit:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
  }
};
export default SinglePost;
