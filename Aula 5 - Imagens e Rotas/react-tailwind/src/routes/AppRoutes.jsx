import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import Usuarios from "../pages/Usuarios";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />
    },
    {
        path: "/usuarios",
        element: <Usuarios />
    }
])
