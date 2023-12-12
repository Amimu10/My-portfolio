import { NavLink, useLocation } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import { MdDashboard } from "react-icons/md";
import Projects from "../../Pages/Projects/Projects";
import Contact from "../../Pages/Contact/Contact";
import { FaHome, FaUser } from "react-icons/fa";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
// import contactIcon from "../../assets/images/contact.png";
const Navbar = () => {
  const location = useLocation();
  console.log(location);

  const renderPage = () => {
    if (location.pathname === "/") {
      return <Home></Home>;
    } else if (location.pathname === "/about") {
      return <About></About>;
    } else if (location.pathname === "/projects") {
      return <Projects></Projects>;
    } else if (location.pathname === "/contact") {
      return <Contact></Contact>;
    }
  };
  return (
    <div className="drawer lg:drawer-open relative">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col md:ml-3 lg:ml-5 my-6">
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
          <div className="fixed z-10">
            <MdDashboard className="relative  inset-0 text-4xl hover:scale-125 duration-700 text-pink-700 shadow-xl"></MdDashboard>
          </div>
        </label>
        {renderPage()}
      </div>
      <div className="drawer-side"> 
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 lg:mt-0 mt-12 h-100vh text-[#E15549] hover:text-pink-700 lg:bg-inherit md:bg-[#F5EACC] font-inter text-xl">
          <li className="">
            <NavLink to="/"
            > 
              <FaHome></FaHome> 
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <FaUser></FaUser>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <TbHeartRateMonitor />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
            <BiSolidMessageDetail />
            </NavLink>
          </li>
          <li>
            <NavLink to="https://medium.com/@amimul211" target="_blank" rel="noopener noreferrer">
            <FaMedium />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
