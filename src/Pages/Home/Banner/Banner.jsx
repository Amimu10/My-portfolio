import bannerImg from "../../../assets/images/banner.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaTwitterSquare,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from "react-router-dom";
import Theme from "../../../component/Theme";
const Banner = () => {
  const [text] = useTypewriter({
    words: [" A Professional Coder...", " A Passionable full Stack Developer."],
    cursor: "pointer",
    cursorStyle: "_",
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const downloadCV = () => {
    // Assuming "Resume-Amimul-Ahsan.pdf" is in the same directory as your component
    const pdfPath = "/Resume-Amimul-Ahsan.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Resume-Amimul-Ahsan.pdf";
    link.click();
  };


  return (
    <section className="w-full pt-10 pb-16 flex border-b-[1px]">
      <div className="text-lightText flex md:flex-row flex-col justify-between items-center gap-10">
        <div className="lg:text-5xl md:4xl text-3xl flex-1">
          <h2 className="text-lg font-normal font-montserrat">
            Wellcome to My world
          </h2>
          <span className=" text-bold text-lightText font-montserrat ">
            {" "}
            Hi, I'm
          </span>{" "}
          <span className="text-designColor font-montserrat font-semibold">
            Amimul Ahsan
          </span>
          <br></br>
          <span className="font-bold text-2xl text-lightText font-inter my-2">
            {text}
          </span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=" "
            cursorBlinkingSpeed="3000"
            cursorColor="#212428"
          ></Cursor>
          <p className="text-base mt-5 text-justify font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            repellat nostrum id et voluptatum qui . Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sint beatae ad, aspernatur eius est
            suscipit earum in illo impedit magni.
          </p>
          <div className="flex lg:justify-between flex-col my-8">
            <div>
              <button className="btn btn-secondary" onClick={downloadCV}>Download CV</button>
            </div>
            <div>
              <p className="my-3 font-cinzel text-lg">FInd Me IN</p>
              <div className="flex gap-5">
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  <Link
                    to="https://www.facebook.com/mushkil.ahsan.ador"
                    target="_blank"
                  >
                    <FaFacebook className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                  </Link>
                </div>
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  <FaGithub className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                </div>
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  <FaLinkedin className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                </div>
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  <FaTwitterSquare className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                </div>
              </div>
            </div>
            <div className="flex-col items-center gap-5 mt-5">
              <p className="my-3 font-cinzel text-lg">BEST SKILL ON</p>
              <div className="flex gap-5 text-[28px] rounded-full">
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  <FaReact className="text-2xl hover:bg-opacity-30 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                </div>
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md ">
                  <SiMongodb className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                </div>
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md ">
                  <BiLogoTailwindCss className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                </div>
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md ">
                  <IoLogoJavascript className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img className="h-[500px] mx-auto" src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
