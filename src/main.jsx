import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Layout from "./components/Layout";
import Arch from "./components/Arch/Arch";
import DrawBoard from "./components/Draw/DrawBoard";
import Neovim from "./components/Neovim/Neovim";
import ProblemList from "./components/Problems/Problem-pages/ProblemList";
import Linux from "./components/Linux/Linux.jsx";
import Login from "./components/auth/Login.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotificationProvider } from "./components/Notifications/NotificationContext.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Layout wrapping all routes
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "Linux",
                element: <Linux />,
            },
            {
                path: "Arch",
                element: <Arch />,
            },
            {
                path: "Login",
                element: <Login />,
            },
            {
                path: "Neovim",
                element: <Neovim />,
            },
            {
                path: "problems",
                element: <ProblemList />,
            },
            {
                path: "draw",
                element: <DrawBoard />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NotificationProvider>
            <RouterProvider router={router} />
        </NotificationProvider>
    </StrictMode>,
);
