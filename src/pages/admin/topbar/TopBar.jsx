import React from 'react';
import "../../../App.css";
import topBar from"./TopBar.module.css";

import { SearchIcon } from '../../../components/styling/icons/SearchIcon';
import PlaceholderImg from "../../../assets/images/placeholder.png";

export default function TopBar() {
       

    return (
    <div>
     
        <div className={topBar.topBarWrapper}>
            <div className={topBar.searchBarWrapper}>
                <div style={{display:"flex",width:"18px"}}>
                    <SearchIcon />
                </div>
                <input type="text" placeholder="Search content" className={topBar.input}></input>
            </div>
            <img src={PlaceholderImg} className={topBar.img} alt="person" />
        </div>

        <div className={topBar.pWrapper}>
            <p>Customers account</p>
        </div>

        <hr/>

    </div>
    );
}