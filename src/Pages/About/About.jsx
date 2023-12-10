import { FaFacebook, FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
    return (
      <section className="w-full h-auto pb-16 border-b-[1px] border-b-black min-h-screen">
          <h2 className="text-5xl my-5">LET ME INTRODUCE MYSELF</h2>
      <div className="text-xl font-inter flex flex-col gap-6 ">
        <p>
         Coding is my escape into a world where life is not just beautiful but also exciting and full of meaning. Everything else? Well, that's a bit of a puzzle for me.
       </p>
        <p>
          I'm a hard worker, fueled by passion for coding, and armed with determination.
        </p>
        <p>
          For me, coding is not just about money; it's a journey, and I'm thrilled to be part of it. 
        </p>
        <p>
          I fell head over heels for programming, and my heart beats for coding with React.js 🤷‍♂️
        </p>
        <p>
          I adore working with JavaScript APIs, and crafting JSON data/APIs is my jam.
        </p>
        <p>
          CSS is pure awesomeness, and I love playing around with Tailwind.
        </p>
        <p>
          Designing a frontend or a landing page with React is my absolute favorite; it brings me immense joy. 
        </p>
        <p>
          JavaScript holds a special place in my heart. I strive to be the best in this language, always eager to learn something new. In the web world, JavaScript is crucial, and I firmly believe it's a game-changing programming language. As a frontend developer, I want to pour my love into working with JavaScript. But that's not all – I aim to be a contributor to our industry.
        </p>
        <p>
          I'm also venturing into backend territory. Currently, I'm diving into Node.js, Express, and MongoDB. The goal? To become an expert full-stack developer.
        </p>
      </div>
      <div className="my-5">
              <h2>FIND ME ON</h2>
              <p className="my-3 font-cinzel text-lg">Feel Free To Contact With Me</p>
              <div className="flex gap-5">
                <div className="bg-black w-12 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all text-center"> 
                  <Link
                    to="https://www.facebook.com/mushkil.ahsan.ador"
                    target="_blank"
                  >
                    <FaFacebook className="text-2xl  hover:bg-opacity-40 hover:translate-1 cursor-pointer hover:text-[#F8034F] " />
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

      </section>
    );
  };
  
  export default About;
  