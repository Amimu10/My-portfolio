import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import "./index.css";
import { Toaster } from 'react-hot-toast';
import {router} from "../src/Route/Route"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <div className=" min-h-screen  mx-auto  text-lightText">
  <RouterProvider router={router} />
  <Toaster />
  </div>
  </React.StrictMode>
);
