
import './App.css'
import CreateNewCustomerLayout from "./pages/customers/create-new-customer/CreateNewCustomerLayout"
import CustomersDashboard from './pages/customers/customers-dashboard/CustomersDashboard'
import Giftcards from "./pages/giftcards/Giftcards"
import Layout from './pages/admin/layout/Layout'


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from './components/styling/ThemeContext'




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/customers",
                element: <CustomersDashboard />,
            },

            {
                path: "/create-new-customer",
                element: <CreateNewCustomerLayout />,
            },

            {
                path: "/gift-cards",
                element: <Giftcards />,
            },
        ]




    }
]);

function App() {
    return (

        <div className="app">
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </div >

    )
}

export default App
