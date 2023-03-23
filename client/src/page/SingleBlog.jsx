import React, { useEffect, useState, useMemo } from "react";
import { AiFillEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams, useNavigate  } from "react-router-dom";
import { getBlog, increaseLove, decreaseLove, updateView, deleteBlog } from "../api/Blog";
import Comment from "../components/Comment/Comment";
import parse from "html-react-parser";
import { BsFillTrashFill } from "react-icons/bs";


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
  const [statusDelete, setStatusDelete] = useState(false);

  useEffect(() => {
    getBlog(id_log, setItemBlog);
  }, [isLoved]);

  const handleLove = () => {
    if (isLoved) decreaseLove(id_log);
    else increaseLove(id_log);
    setIsLoved(!isLoved);
  };

  const handleDeletePost = () => {
    console.log("Hello ")
    if(itemBlog)
      deleteBlog(id_log, itemBlog.thumbnail,setStatusDelete);
  };

  useEffect(()=>{
    if(statusDelete)
    {
      navigate('/');
    }
  },[statusDelete]);

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row justify-content-md-center">
        {itemBlog && (
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

          {currentUser && currentUser.is_admin &&    <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <button
                  className="btn btn-outline-primary btn-lg"
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
            <img src={itemBlog.thumbnail} style={styles.blog_thumbnail} />
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
              {!isLoved ? (
                <p style={{ cursor: "pointer" }}>
                  <AiOutlineHeart
                    size="30px"
                    color="#FF4493"
                    onClick={handleLove}
                  />
                  {itemBlog.number_love} yêu thích
                </p>
              ) : (
                <p style={{ cursor: "pointer" }}>
                  <AiFillHeart
                    size="30px"
                    color="#FF4493"
                    onClick={handleLove}
                  />
                  {itemBlog.number_love} yêu thích
                </p>
              )}
            </div>
            <div className="row justify-content-md-center">
              <div className="form-group">
                <Comment idLog={id_log} />
              </div>
              {[
                {
                  image:
                    "https://static.wixstatic.com/media/nsplsh_2d74597350464b4d6d3767~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_2d74597350464b4d6d3767~mv2_d_6000_4000_s_4_2.jpg",
                  title: "KỸ NĂNG QUAN TRỌNG NHẤT ĐỂ THÀNH CÔNG",
                },
                {
                  image:
                    "https://static.wixstatic.com/media/nsplsh_2d74597350464b4d6d3767~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_2d74597350464b4d6d3767~mv2_d_6000_4000_s_4_2.jpg",
                  title: "KỸ NĂNG QUAN TRỌNG NHẤT ĐỂ THÀNH CÔNG",
                },
                {
                  image:
                    "https://static.wixstatic.com/media/nsplsh_2d74597350464b4d6d3767~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_2d74597350464b4d6d3767~mv2_d_6000_4000_s_4_2.jpg",
                  title: "KỸ NĂNG QUAN TRỌNG NHẤT ĐỂ THÀNH CÔNG",
                },
              ].map((value, index) => {
                return (
                  <div className="col-lg-4 justify-content-center" key={index}>
                    <img
                      src={value.image}
                      alt=""
                      style={{ maxWidth: "100%" }}
                    />
                    <span style={{ fontSize: "14px" }}>{value.title}</span>
                  </div>
                );
              })}
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
};
export default SinglePost;
