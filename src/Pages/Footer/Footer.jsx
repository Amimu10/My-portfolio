import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-5 gap-3 bg-black opacity-30 p-8 text-[#FDCC99] items-center"> 
            <div className="lg:text-left text-center"> 
            <h3>Designed & Developed by Amimul Ahsan</h3>  
            </div>
            <div className="text-center">  
             Copyright © 2023  
            </div>
            <div className="flex gap-5 text-xl justify-center">
            <Link to="https://www.linkedin.com/in/amimul-ahsan-842b35262/" target="_blank"
                  rel="noopener noreferrer"> 
               <FaLinkedin></FaLinkedin> 
               </Link>
               <Link to="https://github.com/Amimu10" target="_blank"
                  rel="noopener noreferrer"> 
               <FaGithub></FaGithub> 
               </Link>  
               <Link to="https://twitter.com/AmimulA11782956" target="_blank"
                  rel="noopener noreferrer">  
               <FaTwitter></FaTwitter>  
               </Link>
               <Link to="https://www.facebook.com/mushkil.ahsan.ador/"    target="_blank"
                  rel="noopener noreferrer">
               <FaFacebookF></FaFacebookF>
               </Link>
            </div>
        </div>
    );
};

export default Footer;