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
  <div className="max-w-screen-2xl h-auto bg-bodyColor mx-auto lg:px-4 px-4 text-lightText">
  <RouterProvider router={router} />
  <Toaster />
  </div>
  </React.StrictMode>
);
