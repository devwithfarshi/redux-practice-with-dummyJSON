import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
