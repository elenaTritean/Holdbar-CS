import React from 'react'
import HoldbarLogo from "../../assets/images/holdbar-dark.svg"
{/*import { Link } from 'react-router-dom';*/}

export default function SideBar() {
  const SideBarStyle={
    sideBar: {
        margin: 0,
        padding: 0,
        width: "200px",
        backgroundColor: "#f1f1f1",
        position: "fixed",
        height: "100%",
        overflow: "auto",
      }
  }
  return (
    <header className="sideBar" style={SideBarStyle.sideBar}>
        <img src={HoldbarLogo} alt="logo" />
        <h1>CS Team</h1>
        {/*<Link to="/list">List</Link>
        <Link to="/create">Create new</Link>
        <Link to="/giftcards">Gift cards</Link>*/}
    </header>
  )
}
