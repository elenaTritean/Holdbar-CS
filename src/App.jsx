
import './App.css'
import CreateNewCustomerLayout from "./pages/customers/create-new-customer/CreateNewCustomer"
import CustomersDashboard from './pages/customers/customers-dashboard/CustomersDashboard'
import GiftcardsDashboard from './pages/giftcards/giftcards-dashboard/GiftcardsDashboard'
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
                path: "/customers/new",
                element: <CreateNewCustomerLayout />,
            },

            {
                path: "/giftcards",
                element: <GiftcardsDashboard />,
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
