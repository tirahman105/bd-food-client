import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Chef from "../pages/Home/Chef";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><Chef></Chef></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allchef/${params.id}`)

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            
        ]
    }
])

export default router;