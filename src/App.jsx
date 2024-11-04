
import './App.css'
import CreateNewCustomerLayout from "./pages/customers/create-new-customer/CreateNewCustomerLayout"
import CustomersDashboard from './pages/customers/customers-dashboard/CustomersDashboard'
import Giftcards from "./pages/giftcards/Giftcards"
import Layout from './pages/admin/Layout'


import { RouterProvider, createBrowserRouter } from "react-router-dom";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/customer-accounts",
                element: <CustomersDashboard />,
            },

            {
                path: "/create-new-customer",
                element: <CreateNewCustomerLayout />,
            },

            {
                path: "/gift-cards-management",
                element: <Giftcards />,
            },
        ]




    }
]);

function App() {
    return (

        <div className="App">
            <RouterProvider router={router} />
        </div >

    )
}

export default App
