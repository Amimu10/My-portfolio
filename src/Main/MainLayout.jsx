
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#482307]  overflow-hidden">
            <Navbar></Navbar> 
            {/* <Outlet></Outlet>  */} 
            <Footer></Footer> 
        </div>
    );
};

export default MainLayout;