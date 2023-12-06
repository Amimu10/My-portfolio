import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../Main/MainLayout";
import Project from "../Pages/Testimonial/Testimonial";
import About from "../Pages/About/About";
import Testimonial from "../Pages/Testimonial/Testimonial";
import Articles from "../Pages/Articles/Articles";
import Contact from "../Pages/Contact/Contact";

       export  const router = createBrowserRouter([ 
            { 
              path: "/", 
              element: <MainLayout></MainLayout>,
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
                  element: <Project></Project>
               },
                {
                  path: "/Contact",
                  element: <Contact></Contact>
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


