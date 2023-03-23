import React, { useEffect, useState, useRef } from "react";
import { createParentComment, getComments, regetApiComments } from "../../api/Comment";
import ItemComment from "./ItemComment";

const Comment = ({ idLog }) => {
  const [inputComment, setInputComment] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [listComments, setListComments] = useState(null);
  const getApiComments = () => {
    getComments(idLog, setListComments);
  };
  const handleSend = () => {
    createParentComment(idLog, currentUser, inputComment);
    setInputComment("");
    regetApiComments(idLog, setListComments);
    console.log(listComments)
  };
  useEffect(() => {
    getApiComments();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <label htmlFor="exampleFormControlTextarea1">Bình luận </label>

        <textarea
          style={styles.comment_input}
          value={inputComment}
          onChange={(e) => {
            setInputComment(e.target.value);
          }}
          placeholder="Nhập bình luận"
        ></textarea>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleSend}
          style={styles.comment_button_send}
        >
          Gửi
        </button>
      </div>

      <div>
        {listComments &&
          listComments.map((value, index) => {
            return (
              <div style={{ marginBottom: "30px" }} key={index}>
                <ItemComment value={value} idLog={idLog} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const styles = {
  comment_input: {
    resize: "none",
    width: "100%",
    height: "150px",
    overflow: "hidden",
    outline: "none",
    padding: "10px",
  },
  comment_button_send: {
    width: "100px",
    borderRadius: "0px",
    marginBottom: "30px",
  },
};
export default Comment;
