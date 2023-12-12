import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../../public/contactleft.json";
import { Link } from "react-router-dom";
import facebook from "../../../public/facebook.json";
import instagram from "../../../public/instagram.json";
import linkedin from "../../../public/linkedin.json";
import { IoLocationOutline } from "react-icons/io5";

const ContactLeft = () => {
  return (
    <div className="">
      <Lottie animationData={animationData} />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-[#D9B28D] font-cinzel">
          <span className="icon">👨‍💻</span> Amimul Ahsan
        </h3>
        <p className="text-[22px] font-montserrat font-normal text-[#BC3433]">
          <span className="icon">💻</span> Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide text-justify">
          <span className="icon">✨</span> Coding for me is beyond earning; it's
          a pursuit of peace and joy. Let's collaborate and turn lines of code
          into a canvas of endless possibilities. Contact me, and let's create
          something extraordinary together.
        </p>
        <p className="flex items-center gap-2 text-lg text-[#167EBB]">
          <span className="icon"><IoLocationOutline /></span> Kurigram, Rangpur, Bangladesh
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <span className="icon text-[#F7630D]">📞 {" "}</span> 
          <span className="text-[#FCE100] font-semibold">+8801935633612</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <span className="icon">📧</span>
          <span className="text-[#3DC60D] text-[18px]">amimul211@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-xl text-[#E1B894] uppercase mb-2">FIND ME IN</h2>
        <div className="flex gap-2">
          <div className=" w-16 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
            {/* <FaGithub className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" /> */}
            <Link>
              <Lottie className="w-full" animationData={facebook} />
            </Link>
          </div>
          <div className=" w-16 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
            {/* <FaGithub className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" /> */}
            <Link>
              <Lottie className="w-full" animationData={linkedin} />
            </Link>
          </div>
          <div className=" w-16 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
            {/* <FaGithub className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" /> */}
            <Link>
              <Lottie className="w-full" animationData={instagram} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
