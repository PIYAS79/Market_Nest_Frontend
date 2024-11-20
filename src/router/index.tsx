import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login_page from "../pages/Login_page";
import Register_page from "../pages/Register_page";
import Product_page from "../pages/Product_page";
import Rootpage from "../pages/Rootpage";
import Cart_page from "../pages/Cart_page";
import Admin_page from "../pages/Admin_page";
import Admin_Rootpage from "../pages/Admin_Rootpage";
import Admin_Categories from "../pages/Admin_Categories";
import Admin_Orders from "../pages/Admin_Orders";
import Admin_Products from "../pages/Admin_Products";
import Profile_Page from "../pages/Profile_Page";
import Admin_Update_Product from "../pages/Admin_Update_Product";
import Update_Profile from "../pages/Update_Profile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Rootpage />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/product',
                element: <Product_page />
            },
            {
                path: '/cart',
                element: <Cart_page />
            },
            {
                path: '/profile',
                element: <Profile_Page />
            },
            {
                path: '/profile/update/:uid',
                loader: ({ params }) => fetch(`http://localhost:5022/app/v1/user/${params.uid}`),
                element: <Update_Profile />
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin_Rootpage />,
        children: [
            {
                path: 'panel',
                element: <Admin_page />
            },
            {
                path: 'category',
                element: <Admin_Categories />
            },
            {
                path: 'orders',
                element: <Admin_Orders />
            },
            {
                path: 'products',
                element: <Admin_Products />
            },
            {
                path: 'products/:pid',
                loader: ({ params }) => fetch(`http://localhost:5022/app/v1/product/${params.pid}`),
                element: <Admin_Update_Product />
            }
        ]
    },
    {
        path: '/login',
        element: <Login_page />
    },
    {
        path: '/register',
        element: <Register_page />
    }
])


export default router;