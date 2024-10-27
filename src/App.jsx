
import './App.css'
import SideBar from "./pages/admin/SideBar"
import TopBar from './pages/admin/TopBar'
import { FontProvider } from './components/styling/FontContext'

function App() {
    return (
        <div className="App">
            <FontProvider>
                <SideBar />
                <TopBar />
            </FontProvider>

        </div >
    )
}

export default App
