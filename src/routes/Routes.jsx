import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Chef from "../pages/Home/Chef";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef/:id',
                element: <Chef></Chef>,
                loader: ({params}) => fetch(`http://localhost:5000/allchef/${params.id}`)

            }
        ]
    }
])

export default router;