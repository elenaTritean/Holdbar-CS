import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'

import { FontProvider } from '../../components/styling/FontContext'

export default function Layout() {


    return (
        <div>
            <FontProvider>
                <div className="flexContainer flexRow">
                    <SideBar />
                    <div className="flexContainer flexColumn" style={{ flex: 1 }}>
                        <TopBar />

                    </div>
                </div>
            </FontProvider >
        </div>
    )
}
