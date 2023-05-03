/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefCard from "../pages/Home/ChefCard/ChefCard";
import ChefsLayout from "../layouts/ChefsLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>

            }
        ],
    },
    {
        path: 'chefs',
        element: <ChefsLayout></ChefsLayout>,
        children: [
            {
                path:':id',
                element: <ChefCard></ChefCard>,
                loader: ({params}) => fetch(`http://localhost:5173/chefs/${params.id}`)
                
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;