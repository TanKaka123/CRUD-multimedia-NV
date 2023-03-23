import React from 'react';

const Title = ({content}) => {
    return (
        <div
        style={{
          margin: "auto",
          paddingLeft: "20%",
          paddingRight: "20%",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <h1 style={{ fontWeight: "400" }}>{content}</h1>
        <h1
          style={{
            height: "0.5px",
            backgroundColor: "black",
            textAlign: "center",
          }}
        ></h1>
      </div>
    );
};

export default Title;