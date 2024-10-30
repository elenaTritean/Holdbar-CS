
import './App.css'
import SideBar from "./pages/admin/SideBar"
import TopBar from './pages/admin/TopBar'
import { FontProvider } from './components/styling/FontContext'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <FontProvider>
                    <div className="flexContainer flexRow">
                        <SideBar />
                        <Routes>
                            <Route path="/" />
                        </Routes>
                        <div className="flexContainer flexColumn" style={{ flex: 1 }}>
                            <TopBar />

                        </div>
                    </div>
                </FontProvider >
            </Router>

        </div >
    )
}

export default App
