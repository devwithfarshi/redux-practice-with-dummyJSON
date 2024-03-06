import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from "./components/Login"
import Products from "./components/Products"
import Cart from "./components/Cart"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router=createBrowserRouter(
 [
     {
         path:"/",
         element:<App/>,
         children:[
             {
         path: "", element:<Login/>
     },{
         path:"/products", element:<Products/>
     },{
         path:"/cart", element:<Cart/>
     }
         ]
     }
 ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
