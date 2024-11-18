import React from 'react'
import SideBar from '../sidebar/SideBar'
import TopBar from '../topbar/TopBar'
import "../../../App"
import { Outlet } from 'react-router-dom'

import { ThemeProvider } from '../../../components/styling/ThemeContext'
import CustomersDashboard from '../../customers/customers-dashboard/CustomersDashboard'

export default function Layout() {


    return (
        <div>
            <ThemeProvider>
                <div className="flexContainer flexRow">
                    <SideBar />
                    <div className="flexContainer flexColumn" style={{ flex: 1 }}>
                        <TopBar />
                        <Outlet/>

                    </div>
                    
                    
                </div>
                
            </ThemeProvider >
        </div>
    )
}
