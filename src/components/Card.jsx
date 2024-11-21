import React from 'react';

export const Card = ({ children }) => {
    const card = {
        backgroundColor:"white",
        padding: "40px",
        margin: "30px",
        borderRadius: '5px',
        height: "100px",
        width:"200px"

    }
    return <div style={card}>{children}</div>;
  };
