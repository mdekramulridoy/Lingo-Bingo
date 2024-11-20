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
import StartLearning from "./components/private/StartLearning";
import Tutorials from "./components/private/Tutorials";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import LessonsPage from "./components/private/LessonsPage";
import NotFound from "./components/NotFound";

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
        path: "about",
        element: <About />,
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
        path: "start-learning",
        element: (
          <PrivateRoute>
            <StartLearning />
          </PrivateRoute>
        ),
      },
      {
        path: "lessons",
        element: (
          <PrivateRoute>
            <LessonsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "lessons/:lesson_no",
        element: (
          <PrivateRoute>
            <Lessons />
          </PrivateRoute>
        ),
      },
      {
        path: "tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "footer",
        element: <Footer />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
