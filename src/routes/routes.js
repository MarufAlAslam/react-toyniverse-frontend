import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import Home from "../pages/home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])

export default routes;