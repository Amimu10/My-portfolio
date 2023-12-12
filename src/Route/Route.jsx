import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../Main/MainLayout";
import Project from "../Pages/Testimonial/Testimonial";
import About from "../Pages/About/About";
import Testimonial from "../Pages/Testimonial/Testimonial";
import Articles from "../Pages/Articles/Articles";
import Contact from "../Pages/Contact/Contact";
import Loading from "../Loading/Loading";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

       export  const router = createBrowserRouter([ 
            { 
              path: "/", 
              element: <MainLayout></MainLayout>,
              errorElement: <ErrorPage></ErrorPage>,
              children: [ 
                {
                    path: "/", 
                    element: <Home></Home>   
                },
                {
                  path: "/about",
                  element: <About></About>
               },
                {
                  path: "/projects",
                  element: <Loading><Project></Project></Loading>
               },
                {
                  path: "/Contact",
                  element: <Loading><Contact></Contact></Loading>
               },
                {
                  path: "/testimonial",
                  element: <Testimonial></Testimonial>
               },
                {
                  path: "/articles",
                  element: <Articles></Articles>
               },
                {
                  path: "/contact",
                  element: <Contact></Contact>
               },
              ]
            },
          ]);


