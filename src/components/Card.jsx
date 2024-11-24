import React from 'react';

export const Card = ({ children, width, height }) => {
    const card = {
        display:"flex",
        flexDirection:"column",
        backgroundColor:"white",
        borderRadius: '8px',
        height: height,
        width:width,
        padding:"30px",
        justifyContent:"center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",

    }
    return <div style={card}>{children}</div>;
  };
