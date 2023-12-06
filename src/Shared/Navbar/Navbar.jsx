

import {NavLink, useLocation } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import { MdDashboard } from "react-icons/md";
import Projects from "../../Pages/Projects/Projects";
import Contact from "../../Pages/Contact/Contact";

const Navbar = () => {
const location = useLocation();  
console.log(location); 
 
  const renderPage = () => {
    if (location.pathname === "/") {          
    return <Home></Home>   
  }
  else if (location.pathname === "/about"){  
    return <About></About> 
 } 
  else if (location.pathname === "/projects"){ 
    return <Projects></Projects>  
 } 
  else if (location.pathname === "/contact"){ 
    return <Contact></Contact> 
 } 

  };
  return (
    <div>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col md:ml-3 lg:ml-5 my-6"> 
            <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
            <MdDashboard className="text-4xl hover:scale-125 duration-700 text-pink-700 shadow-xl"></MdDashboard>
            </label> 
            {renderPage()}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 min-h-screen text-white bg-[#212428] focus:text-pink-700 font-inter text-base">
             
              <li className="focus:text-pink-700">
                <NavLink 
                
                  to="/"          
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                
                  to="/about" 
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                
                  to="/projects" 
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                
                  to="/contact" 
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
