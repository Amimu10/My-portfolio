
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
// import Lottie from "lottie-react";
import Lottie from "lottie-react";
import github from "../../../../public/github.json";
import instagram from "../../../../public/instagram.json";
import linkedin from "../../../../public/linkedin.json";
import cv from "../../../../public/cv.json";
// import stack from "../../../../public/stack.json";
import hello from "../../../../public/hello.json";
import frontend from "../../../../public/frontend.json"; 
import facebook from "../../../../public/facebook.json"; 
// import { GoCodeReview } from "react-icons/go";

const Banner = () => {
  const [text] = useTypewriter({
    words: [" Frontend Developer", "A passionate Coder ..."],
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
    <section className="w-full relative  h-100vh  flex min-h-screen px-5">
      {/* <div className="absolute h-fit inset-0 w-full" >
   <Lottie animationData={animationData} /> 
   </div> */}
      <div className="text-lightText flex md:flex-row flex-col justify-between">
        <div className="lg:text-5xl md:4xl text-3xl flex-1 w-full h-full">
          <div className=" flex justify-start">
          <Lottie className="w-52 -mt-7" animationData={hello} /> 
          </div>
          <h2 className="text-lg text-[#F8EDD2] font-normal font-montserrat -mt-6">
            Wellcome to My world 
          </h2>
          <div className="flex items-center gap-2">
           <p className="text-2xl text-[#E15549]">I'am,</p>
          </div>{" "}
          <span className="text-[#FFF9E9] font-montserrat font-semibold">
            Amimul Ahsan 
          </span>
          <br></br>
          <span className="font-bold md:text-2xl text-xl text-lightText font-inter my-2">
            {text} 
          </span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=" "
            cursorBlinkingSpeed="3000"
            cursorColor="#212428" 
          ></Cursor>
          <p className="text-base mt-5 text-justify font-montserrat">
           I'm also venturing into backend territory. Currently, I'm diving
            into Node.js, Express, and MongoDB. The goal? To become an expert
            full-stack developer.
          </p>
          <div className="flex lg:justify-between flex-col my-8">
            <div> 
              <button
                // className="bg-[#E15549] p-2 rounded-md text-lg font-black "
                onClick={downloadCV} 
              >
            <div className="bg-[#CFA986] text-[#351E11] p-2 rounded-md font-black font-cinzel flex items-center">
            <p className="text-lg">DOWNLOAD CV </p>
                <p><Lottie className="w-12" animationData={cv} /></p> 
            </div> 
               
              </button>
            </div> 
            <div>
              <p className="my-3 mt-8 text-xl text-[#F8EDD2] font-montserrat text-uppercase">Connect with me in a click</p>
              <div className="flex">
                {/* <div className="bg-[#FFEFC7] text-[#482307] w-11 h-11 inline-flex items-center justify-center shadow-shadow rounded-full transition-all">
                  <Link
                    to="https://www.facebook.com/mushkil.ahsan.ador"
                    target="_blank"
                  >
                    <FaFacebook className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" />
                  </Link>
                </div> */}
                <div className=" w-24 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  {/* <FaGithub className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" /> */}
                  <Link>
                    <Lottie className="w-full" animationData={github} />
                  </Link>
                </div>
                <div className=" w-24 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  {/* <FaGithub className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" /> */}
                  <Link>
                    <Lottie className="w-full" animationData={linkedin} />
                  </Link>
                </div>
                <div className=" w-24 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  {/* <FaGithub className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" /> */}
                  <Link>
                    <Lottie className="w-full" animationData={instagram} />
                  </Link>
                </div>
                <div className=" w-24 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                  {/* <FaGithub className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F]" /> */}
                  <Link>
                    <Lottie className="w-full" animationData={facebook} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* <img className="h-[550px] mx-auto" src={bannerImg} alt="" /> */}
          <Lottie className="w-[400px]" animationData={frontend} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
