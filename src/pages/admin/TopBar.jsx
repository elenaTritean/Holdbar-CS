import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {
    const TopBarStyle = {
        wrapper: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100vh",
            height: "20px",

        },

        inputWrapper: {
            backgroundColor: "white",
            width: "200px",
            borderRadius: "10px",
            height: "2.5rem",
            padding: "0 15px",
            boxShadow: "0px 0px 0px #ddd",
            display: "flex",
            alignItems: "center",
        },

        input: {
            backgroundColor: "transparent",
            border: "none",
            height: "100%",
            fontSize: "0.80rem",
            width: "100%",
            marginLeft: "2px",

        }


    }
    return (
        <div style={TopBarStyle.wrapper}>
            <div style={TopBarStyle.inputWrapper}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search for names.." style={TopBarStyle.input}></input>
            </div>
            <FontAwesomeIcon icon={faCircleUser} style={{ width: "40px", height: "40px" }} />
        </div>
    )
}
