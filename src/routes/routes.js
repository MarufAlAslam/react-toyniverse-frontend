import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>
            }
        ]
    }
])

export default routes;