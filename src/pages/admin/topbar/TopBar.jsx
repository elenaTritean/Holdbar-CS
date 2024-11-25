import React from 'react';
import "../../../App.css";
import topBar from "./TopBar.module.css";
import { useTheme } from "../../../components/styling/ThemeContext";

import { SearchIcon } from '../../../components/styling/icons/SearchIcon';
import PlaceholderImg from "../../../assets/images/placeholder.png";

export default function TopBar() {
    const theme = useTheme();
    return (
        <div className={topBar.topBarWrapper}>
            <div className={topBar.searchIconWrapper}>
                <div className={topBar.searchBarWrapper}>
                    <div style={{ display: "flex", width: "18px" }}>
                        <SearchIcon style={{ fill: "rgb(181, 182, 196)" }} />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search content" 
                        className={topBar.input} 
                        style={{ ...theme.h4, ...theme.greyColor }} 
                    />
                </div>
                <img src={PlaceholderImg} className={topBar.img} alt="person" />
            </div>


            <div className={topBar.infoWrapper}>
                <p style={{ margin: "0px", paddingTop:"10px", paddingBottom:"4px", ...theme.h5, ...theme.greyColor }}>
                    Customers accounts
                </p>
                <hr className={topBar.divider} />
            </div>
        </div>
    );
}