import React, { useState } from "react";
import { GoCommentDiscussion } from "react-icons/go";
import InputComment from "./InputComment";
import ListCommentsRep from "./ListCommentsRep";

const ItemComment = ({ value, idLog }) => {
  console.log("Valueeeee", value)
  const [isOpenInputRep, setIsInputRep] = useState(false);
  const [isOpenChildComment, setIsOpenChildComment] = useState(false);
  const [refreshChildComment, setRefresgChildComment] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <img
          src={value.avatar_author}
          alt=""
          style={styles.item_comment_avatar}
        />
        <div>
          <p>
            {value.full_name_author}
            <br />
            {value.created_at}
          </p>
        </div>
      </div>
      <div style={{ marginLeft: "48px", marginTop: "5px" }}>
        {value.content}
      </div>
      <button
        style={styles.item_comment_button_rep}
        onClick={() => {
          setIsInputRep(!isOpenInputRep); 
        }}
      >
        <GoCommentDiscussion /> Reply
      </button>


      {isOpenInputRep && (
        <div style={styles.child_comment_input}>
          <InputComment
            setIsInputRep={setIsInputRep}
            idLog={idLog}
            valueParent={value}
            setIsOpenChildComment={setIsOpenChildComment}
            setRefresgChildComment={setRefresgChildComment}
          />
        </div>
      )}

      <div style={styles.child_comment_wrapper}>
        {isOpenChildComment ? (
          <div>
            <ListCommentsRep value={value} idLog={idLog} refreshChildComment={refreshChildComment}/>
          </div>
        ) : (
          <div>
            { (
              <button
                style={{
                  fontWeight: "500",
                  marginTop: "20px",
                }}
                onClick={() => {
                  setIsOpenChildComment(!isOpenChildComment);
                }}
              >
                Xem {value.number_child} câu trả lời
              </button>
            )}
          </div>
        )}
      </div>
      <div style={styles.line} />
    </div>
  );
};

export const styles = {
  line: {
    borderTopStyle: "solid",
    borderColor: "gray",
    borderTopWidth: "0.1px",
    margin: "30px",
  },
  child_comment_wrapper: {
    marginLeft: "48px",
    marginTop: "15px",
    borderLeftStyle: "solid",
    borderLeftWidth: "0.1px",
    borderColor: "gray",
    paddingLeft: "20px",
  },
  item_comment_avatar: {
    borderRadius: "100%",
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  item_comment_button_rep: {
    marginLeft: "48px",
    marginTop: "15px",
    border: "none",
    background: "none",
  },
  child_comment_input: {
    marginLeft: "48px",
    marginTop: "15px",
    borderLeftStyle: "solid",
    borderLeftWidth: "0.1px",
    borderColor: "gray",
    paddingLeft: "20px",
  },
};

export default ItemComment;
