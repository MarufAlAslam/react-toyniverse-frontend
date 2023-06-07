import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

import './assets/style/style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}></RouterProvider>);
