import React from 'react'

import { NavLink } from 'react-router-dom'
import { useTheme } from "../../../components/styling/ThemeContext"

import sideBar from "./SideBar.module.css"
import "../../../App"

import HoldbarLogo from "../../../assets/images/holdbar-dark.svg"
import { CustomerIcon } from '../../../components/styling/icons/CustomerIcon'
import { CustomerNewIcon } from '../../../components/styling/icons/CustomerNewIcon'
import { GiftcardIcon } from '../../../components/styling/icons/GiftcardIcon'

export default function SideBar() {
  const theme = useTheme();
  

  return (
    <div className={`flexContainer ${sideBar.wrapper} flexColumn`}>
      <div style={{paddingBottom:"60px"}}>
        <div className={`${sideBar.logoWrapper}`} >
          <img src={HoldbarLogo} className={` ${sideBar.logo}`} alt="logo" />
        </div>
        <h1  style={{...theme.h3, paddingLeft:"7px", margin:"0px"}}>CS Team Platform</h1>
      </div>

      <div style={{gap:"15px"}}  className={`flexContainer ${sideBar.sidebarLink} flexColumn`} >
        <NavLink to="customers"  style={{ ...theme.h4, alignItems:"center", height:"40px" }} className={({ isActive }) => `flexContainer ${isActive ? sideBar.active : ""}`} ><CustomerIcon style={{fill: 'currentColor', width:"26px", paddingRight:"10px", paddingLeft:"10px"}} /> Customers</NavLink>
        <NavLink to="create-new-customer"  style={{ ...theme.h4, alignItems:"center", height:"40px"  }} className={({ isActive }) => `flexContainer ${isActive ? sideBar.active : ""}`}><CustomerNewIcon style={{fill: 'currentColor', width:"26px", paddingRight:"10px", paddingLeft:"10px"}}/> Create New</NavLink>
        <NavLink to="gift-cards"  style={{ ...theme.h4, alignItems:"center", height:"40px" }} className={({ isActive }) => `flexContainer ${isActive ? sideBar.active : ""}`}><GiftcardIcon style={{fill: 'currentColor', width:"26px", paddingRight:"10px", paddingLeft:"10px"}}/> Gift cards</NavLink>
      </div>

    </div >
  )
}
