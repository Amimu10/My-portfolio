import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-5 gap-3 bg-black opacity-30 p-8 text-[#FFEFC8]"> 
            <div className="lg:text-left text-center"> 
            <h3>Designed & Developed by Amimul Ahsan</h3>
            </div>
            <div className="text-center">  
             Copyright © 2023  
            </div>
            <div className="flex gap-5 justify-center">
                <FaGithub></FaGithub>
                <FaTwitter></FaTwitter>
                <FaLinkedin></FaLinkedin>
                <FaFacebookF></FaFacebookF>
            </div>
        </div>
    );
};

export default Footer;