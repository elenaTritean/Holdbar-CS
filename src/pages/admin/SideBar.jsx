import React from 'react'
import HoldbarLogo from "../../assets/images/holdbar-dark.svg"
{/*import { Link } from 'react-router-dom';*/ }
import { useFontStyles } from "../../components/styling/FontContext"

export default function SideBar() {
  const SideBarStyle = {
    wrapper: {
      boxSizing: "border-box",
      width: "260px",

      maxWidth: "100%",
      height: "100vh", // Full height of the viewport


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
      {/*<Link to="/list">List</Link>
        <Link to="/create">Create new</Link>
        <Link to="/giftcards">Gift cards</Link>*/}
    </div >
  )
}
