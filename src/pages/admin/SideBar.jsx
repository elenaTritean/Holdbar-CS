import React from 'react'
import HoldbarLogo from "../../assets/images/holdbar-dark.svg"
import Customers from "../../assets/images/icon_customer.png"
import NewCustomer from "../../assets/images/icon_customer_new.png"
import GiftCards from "../../assets/images/icon_giftcard.png"
import { NavLink } from 'react-router-dom'

import { useFontStyles } from "../../components/styling/FontContext"
import "../../App.css"



export default function SideBar() {
  const fontStyles = useFontStyles();

  return (
    <div >
      <div >
        <img src={HoldbarLogo} alt="logo" />
        <h1  >CS Team Platform</h1>
        <br />
        <h1>Customers</h1>
      </div>

      <div className="flexContainer flexColumn" >
        <NavLink to="customer-accounts" ><img src={Customers} alt="Customers icon" />Customers</NavLink>
        <NavLink to="create-new-customer" ><img src={NewCustomer} alt="New customer icon" /> Create New</NavLink>
        <NavLink to="gift-cards-management" ><img src={GiftCards} alt="Gift cards icon" /> Gift cards</NavLink>
      </div>

    </div >
  )
}
