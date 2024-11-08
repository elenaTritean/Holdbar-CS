import React from 'react'
import HoldbarLogo from "../../assets/images/holdbar-dark.svg"
import Customers from "../../assets/images/icon_customer.png"
import NewCustomer from "../../assets/images/icon_customer_new.png"
import GiftCards from "../../assets/images/icon_giftcard.png"
import { NavLink } from 'react-router-dom'

import { useFontStyles } from "../../components/styling/FontContext"
import "../../App.css"



export default function SideBar() {

  const SideBarStyle = {
    wrapper: {
      boxSizing: "border-box",
      width: "260px",
      height: "100vh", // Full height of the viewport
      position: "relative",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",

    },

    logo: {
      marginTop: "24px",
      height: "22px",
      width: "124px",
    },

    heading: {
      padding: "20px",
      paddingTop: "15px",
      paddingRight: "15px",
      paddingBottom: "15px",
      paddingLeft: "15px",
      marginLeft: "8px",
      marginRight: "8px",
    },

    subtext: {
      paddingTop: "0px",
      marginTop: "0px",
    },

    navContainer: {
      padding: "8.8px 16px",
      gap: "8px",

    },

    navElements: {
      marginTop: "8px",
      marginBottom: "8px",
      textDecoration: "none",
      color: "black",
    },

    navElements: (isHovered) => ({
      marginTop: "8px",
      marginBottom: "8px",
      textDecoration: "none",
      color: "black",
      position: "relative",
      paddingBottom: "4px",
      transition: "color 0.3s ease",
      color: isHovered ? "#333" : "black",

      backgroundColor: isHovered ? "2px solid #EDF0FD" : "2px solid transparent",
      transition: "background-color 0.3s ease",
    }),
  };




  const fontStyles = useFontStyles();

  return (
    <div style={SideBarStyle.wrapper}>
      <div style={SideBarStyle.heading}>
        <img src={HoldbarLogo} alt="logo" style={SideBarStyle.logo} />
        <h1 style={{ ...fontStyles.mediumTextMedium, ...SideBarStyle.subtext }} >CS Team Platform</h1>
        <br />
        <h1 style={{ ...fontStyles.mediumTextMedium, ...SideBarStyle.subtext }} >Customers</h1>
      </div>

      <div className="flexContainer flexColumn" style={{ ...SideBarStyle.navContainer, ...fontStyles.mediumTextMedium }}>
        <NavLink to="customer-accounts" style={SideBarStyle.navElements}><img src={Customers} alt="Customers icon" />Customers</NavLink>
        <NavLink to="create-new-customer" style={SideBarStyle.navElements}><img src={NewCustomer} alt="New customer icon" /> Create New</NavLink>
        <NavLink to="gift-cards-management" style={SideBarStyle.navElements}><img src={GiftCards} alt="Gift cards icon" /> Gift cards</NavLink>
      </div>

    </div >
  )
}
