import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Lottie from 'lottie-react';
import animationData from "../../../public/contactAnimation.json";

const ContactLeft = () => { 
  return (  
    <div className="">  
     <Lottie animationData={animationData} />  
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Amimul Ahsan</h3>
        <p className="text-lg font-normal text-gray-400"> 
          Frontend Developer  
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis 
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801935633612</span> 
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">amimul211@gmail.com</span>   
        </p> 
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft