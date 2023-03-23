import React, { useEffect, useState } from "react";
import { GoCommentDiscussion } from "react-icons/go";
import { getChildComments } from "../../api/Comment";

const ListCommentsRep = ({ value, idLog, refreshChildComment }) => {
  const [valueComment, setValueComment] = useState(null);
  useEffect(() => {
    getChildComments(idLog, value.id, setValueComment);
  }, [refreshChildComment]);


  return (
    <div style={{ marginTop: "20px" }}>
      {valueComment &&
        valueComment.map((value, index) => {
          return (
            <div>
           
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={value.avatar_author}
                  alt=""
                  style={{
                    borderRadius: "100%",
                    width: "35px",
                    height: "35px",
                    marginRight: "10px",
                  }}
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
                style={{
                  marginLeft: "48px",
                  marginTop: "15px",
                  border: "none",
                  background: "none",
                }}
                // onClick={() => {
                //   setIsInputRep(!isOpenInputRep);
                // }}
              >
                <GoCommentDiscussion /> Reply
              </button> 
            </div>
          );
        }).reverse()}
      {/* {isOpenInputRep && (
        <div
          style={{
            marginLeft: "48px",
            marginTop: "15px",
            borderLeftStyle: "solid",
            borderLeftWidth: "0.1px",
            borderColor: "gray",
            paddingLeft: "20px",
          }}
        >
          <InputComment
            setIsInputRep={setIsInputRep}
            idLog={idLog}
            valueParent={value}
          />
        </div>
      )} */}
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
};

export default ListCommentsRep;
