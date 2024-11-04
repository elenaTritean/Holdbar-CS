import React from 'react'
import HoldbarLogo from "../../assets/images/holdbar-dark.svg"
import { NavLink } from 'react-router-dom'
import { useFontStyles } from "../../components/styling/FontContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faGift, faPlus } from '@fortawesome/free-solid-svg-icons'
import CustomersDashboard from '../customers/customers-dashboard/CustomersDashboard'
import CreateNewCustomerLayout from '../customers/create-new-customer/CreateNewCustomerLayout'
import Giftcards from "../giftcards/Giftcards"
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
    }

  }

  const fontStyles = useFontStyles();

  return (
    <div style={SideBarStyle.wrapper}>
      <div style={SideBarStyle.heading}>
        <img src={HoldbarLogo} alt="logo" style={SideBarStyle.logo} />
        <h1 style={{ ...fontStyles.largeTextMedium, ...SideBarStyle.subtext }} >CS Team</h1>
      </div>

      <div>
        <NavLink to="customer-accounts"><FontAwesomeIcon icon={faBuilding} /> Customer accounts</NavLink>
        <NavLink to="create-new-customer"><FontAwesomeIcon icon={faPlus} /> Create New Customer</NavLink>
        <NavLink to="gift-cards-management"><FontAwesomeIcon icon={faGift} /> Gift cards management</NavLink>
      </div>

    </div >
  )
}
