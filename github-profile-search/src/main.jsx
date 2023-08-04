import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorHandler.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileComponent from "./components/profile.jsx";

async function GetProfileData() {
  let username = localStorage.getItem("githubUsername");
  let url = "https://api.github.com/users/" + username;
  console.log(username);
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
  return data;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    loader: GetProfileData,
    element: <ProfileComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
