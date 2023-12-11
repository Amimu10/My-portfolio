// import {
//   // FaFacebook,
//   // FaGithub,
//   // FaLinkedin,
//   // FaTwitterSquare,
// } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../../public/stack.json";
import react from "../../../public/react.json"; 
import javascript from "../../../public/javascript.json"; 
import node from "../../../public/nodejs.json";  
import firebase from "../../../public/firebase.json"; 
import mongodb from "../../../public/mongodb.json"; 
import tailwind from "../../assets/images/tailwind.png";   


const About = () => {
  return (
    <section className="w-full h-auto pb-16 min-h-screen ">
      <div className="grid lg:grid-cols-12 g:grid-rows-1 grid-cols-1 px-4 gap-2 items-center">
        <div className="col-span-6 lg:order-1 md:order-2">
          <Lottie className="w-full" animationData={animationData} />
        </div>
        <div className="text-base font-inter flex flex-col gap-6 col-span-6">
          <h2 className="text-3xl my-5">LET ME INTRODUCE MYSELF</h2> 
       <div className="text-justify">
       <p>
            Coding is my escape into a world where life is not just beautiful
            but also exciting and full of meaning. Everything else? Well, that's
            a bit of a puzzle for me.
          </p>
          <p>
            I'm a hard worker, fueled by passion for coding, and armed with
            determination.
          </p>
          <p>
            For me, coding is not just about money; it's a journey, and I'm
            thrilled to be part of it.
          </p>
          <p>
            I fell head over heels for programming, and my heart beats for
            coding with React.js 🤷‍♂️
          </p>
          <p>
            I adore working with JavaScript APIs, and crafting JSON data/APIs is
            my jam.
          </p>
          <p>
            CSS is pure awesomeness, and I love playing around with Tailwind.
          </p>
          <p>
            Designing a frontend or a landing page with React is my absolute
            favorite; it brings me immense joy.
          </p>
          <p>
            JavaScript holds a special place in my heart. I strive to be the
            best in this language, always eager to learn something new.
          </p>
          <p>
            I'm also venturing into backend territory. Currently, I'm diving
            into Node.js, Express, and MongoDB. The goal? To become an expert
            full-stack developer.
          </p>
       </div>
        </div>
      </div>
      <div>
           <div className="flex-col items-center gap-5 mt-14">
              <p className="my-3 font-cinzel text-lg text-center ">COMFORT WITH</p>
              <div className="flex flex-wrap justify-center gap-8 rounded-full">
                <div className=" w-24 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all"> 
                <img className="mx-auto" src={tailwind} alt="" />
                </div> 
                <div className=" w-24 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                <Lottie className="w-20" animationData={javascript} />
                </div> 
                <div className=" w-20 h-12 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                <Lottie className="w-20" animationData={react} />
                </div>
              
              </div>
            </div>
            <div className="mt-12 text-center">
            <p className=" font-cinzel text-lg">Familiar With</p>
            <div className="flex flex-wrap justify-center gap-8">
            <div className=" shadow-shadow rounded-md transition-all">
                <Lottie className=" h-28 " animationData={node} /> 
                </div>
             <div className=" shadow-shadow rounded-md transition-all">
                <Lottie className=" h-28" animationData={mongodb} /> 
              </div>
              <div className=" shadow-shadow rounded-md transition-all">
                <Lottie className=" h-28" animationData={firebase} /> 
                </div>
            </div>
            </div>
      </div>
    </section>
  );
};

export default About;


//  In the
// web world, JavaScript is crucial, and I firmly believe it's a
// game-changing programming language. As a frontend developer, I want
// to pour my love into working with JavaScript. But that's not all – I
// aim to be a contributor to our industry.