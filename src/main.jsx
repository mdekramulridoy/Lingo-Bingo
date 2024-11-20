import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./providers/AuthProvider";
import Profile from "./components/private/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import Lessons from "./components/private/Lessons";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "lessons",
        element: (
          <PrivateRoute>
            <Lessons />
          </PrivateRoute>
        ),
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
