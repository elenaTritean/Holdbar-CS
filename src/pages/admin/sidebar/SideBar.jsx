import React from 'react'
import HoldbarLogo from "../../../assets/images/holdbar-dark.svg"
import Customers from "../../../assets/images/icon_customer.png"
import NewCustomer from "../../../assets/images/icon_customer_new.png"
import GiftCards from "../../../assets/images/icon_giftcard.png"
import { NavLink } from 'react-router-dom'
import { useTheme } from "../../../components/styling/ThemeContext"
import sideBar from "./SideBar.module.css"


import "../../../App"



export default function SideBar() {
  const theme = useTheme();

  return (
    <div className={`flexContainer ${sideBar.wrapper} flexColumn`}>
      <div >
        <img src={HoldbarLogo} className={`flexContainer ${sideBar.logo}`} alt="logo" />
        <h1  className={`${theme.fontFamily} ${theme.h3}`}>CS Team Platform</h1>
        <br />
        <h1>Customers</h1>
      </div>

      <div className={`flexContainer ${sideBar.sidebar}  flexColumn`}>
        <NavLink to="customer-accounts" ><img src={Customers} alt="Customers icon" />Customers</NavLink>
        <NavLink to="create-new-customer" ><img src={NewCustomer} alt="New customer icon" /> Create New</NavLink>
        <NavLink to="gift-cards-management" ><img src={GiftCards} alt="Gift cards icon" /> Gift cards</NavLink>
      </div>

    </div >
  )
}
