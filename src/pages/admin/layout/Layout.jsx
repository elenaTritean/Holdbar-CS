import React from 'react'
import SideBar from '../sidebar/SideBar'
import TopBar from '../topbar/TopBar'
import "../../../App"
import { Outlet } from 'react-router-dom'
import layout from "./Layout.module.css"

import { ThemeProvider } from '../../../components/styling/ThemeContext'


export default function Layout() {


    return (
        <div className={layout.layoutWrapper}>
            <ThemeProvider>
                <div className={`flexContainer`} style={{height:"100%"}}>
                    <SideBar />
                    <div className="flexContainer flexColumn" style={{ flex: 1, margin: "20px" }}>
                        <TopBar />
                        <Outlet/>
                    </div>
                    
                    
                </div>
                
            </ThemeProvider >
        </div>
    )
}
