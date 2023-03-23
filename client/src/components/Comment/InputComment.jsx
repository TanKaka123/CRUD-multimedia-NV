import React, { useState } from "react";
import { createChildComment } from "../../api/Comment";

const InputComment = ({ setIsInputRep, idLog, valueParent, setIsOpenChildComment, setRefresgChildComment }) => {
  const [inputComment, setInputComment] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const handleSend = () => {
    createChildComment(idLog, valueParent.id, currentUser, inputComment);
    setIsInputRep(false);
    setIsOpenChildComment(true);
    setRefresgChildComment(prevState => !prevState);
  };
  return (
    <div style={{ marginBottom: "30px" }}>
      <textarea
        style={styles.comment_input}
        value={inputComment}
        onChange={(e) => {
          setInputComment(e.target.value);
        }}
        placeholder="Trả lời"
      ></textarea>
      <button
        type="button"
        className="btn btn-dark"
        onClick={handleSend}
        style={{ width: "100px", borderRadius: "0px", marginBottom: "30px" }}
      >
        Gửi
      </button>
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
};
export default InputComment;
