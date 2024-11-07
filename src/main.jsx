import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Layout from "./components/Layout";
import DrawBoard from "./components/Draw/DrawBoard";
import ProblemList from "./components/Problems/Problem-pages/ProblemList";
import Linux from "./components/Linux/Linux.jsx";
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
