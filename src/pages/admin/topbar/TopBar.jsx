import React from 'react';
import "../../../App.css";

import { SearchIcon } from '../../../components/styling/icons/SearchIcon';
import PlaceholderImg from "../../../assets/images/placeholder.png";

export default function TopBar() {
    const TopBarStyle = {
        wrapper: {
            display: "flex",
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent: "space-between", 
            margin: "20px",
            boxSizing: "border-box",
        },

        inputWrapper: {
            backgroundColor: "white",
            flexGrow: 1,  
            maxWidth: "800px", 
            minWidth: "200px", 
            borderRadius: "10px",
            height: "2.2rem",  
            padding: "0 15px",
            boxShadow: "0px 0px 0px #ddd",
            display: "flex",
            alignItems: "center",  
            margin: "10px",
            border: "1px solid grey",
            boxSizing: "border-box",
        },

        input: {
            backgroundColor: "transparent",
            border: "none",
            height: "100%",
            fontFamily: "DM Sans",
            fontSize: "0.80rem",
            width: "100%",  
            marginLeft: "2px",
            color: "rgb(181, 182, 196)",
        },

        img: {
            width: "38px",  
            height: "38px",  
            alignItems: "center",
            flexShrink: 0, 
            objectFit: "contain", 
        },

        paragraph: {
            color: "grey",
            fontSize: "10px",
            marginLeft: "auto", 
            alignSelf: "center", 
        },

        paragraphWrapper: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxSizing: "border-box",
            marginLeft:"32px",
            marginRight:"20px",
        },
        
    };

    return (
    <div>
     
        <div style={TopBarStyle.wrapper}>
            <div style={TopBarStyle.inputWrapper}>
                <SearchIcon />
                <input type="text" placeholder="Search content" style={TopBarStyle.input}></input>
            </div>
            <img src={PlaceholderImg} style={TopBarStyle.img} alt="person" />
            {/* Paragraph inside flex container, aligned to the right */}
           
        </div>
        <div style={TopBarStyle.paragraphWrapper}>
            <p style={TopBarStyle.paragraph}>Customers account</p>
        </div>
        <hr style={{marginLeft:"32px", marginRight:"20px", marginTop:"0px"}} />
    </div>
    );}