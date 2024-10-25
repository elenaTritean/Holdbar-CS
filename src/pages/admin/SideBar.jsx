import React from 'react'
import HoldbarLogo from "../../assets/images/holdbar-dark.svg"
{/*import { Link } from 'react-router-dom';*/}

export default function SideBar() {
  const SideBarStyle={
    wrapper: {
        boxSizing: "border-box",
        width:"260px",
        paddingTop:"15px",
        paddingRight:"15px",
        paddingBottom:"15px",
        paddingLeft:"15px",
        maxWidth: "100%",
        height: "100vh", // Full height of the viewport
        position: "fixed", 

      },
    
    logo: {
       marginTop:"24px",
       marginBottom:"8px",
       marginLeft: "8px",
       marginRight: "8px",
       height: "22px",
       width:"124px",
    }
    
    
  }
  return (
    <div className="wrapper" style={SideBarStyle.wrapper}>
        <img src={HoldbarLogo} alt="logo" className="logo" style={SideBarStyle.logo} />
        <h1>CS Team</h1>
        {/*<Link to="/list">List</Link>
        <Link to="/create">Create new</Link>
        <Link to="/giftcards">Gift cards</Link>*/}
    </div>
  )
}
