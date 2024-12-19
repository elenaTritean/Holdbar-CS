import React from 'react';

export const Card = ({ children, width, height, paddingBottom }) => {
    const card = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: '8px',
        height: height,
        width: width,
        paddingTop: "30px",
        paddingRight: "30px",
        paddingLeft: "30px",
        paddingBottom: paddingBottom,
        justifyContent: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",

    }

    return <div style={card}>{children}</div>;
};
