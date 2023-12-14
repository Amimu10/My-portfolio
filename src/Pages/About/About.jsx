
import Lottie from "lottie-react";
import animationData from "../../../public/stack.json";
import react from "../../../public/react.json"; 
import javascript from "../../../public/javascript.json"; 
import node from "../../../public/nodejs.json";  
import firebase from "../../../public/firebase.json"; 
import mongodb from "../../../public/mongodb.json"; 
import tailwind from "../../assets/images/tailwind.png";   
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {
  return (
    <section data-aos="zoom-in-right" className="w-full h-auto pb-16 min-h-screen ">
      <div className="grid lg:grid-cols-12 g:grid-rows-1 grid-cols-1 px-4 gap-2 items-center">
        <div className="col-span-6 lg:order-1 md:order-2">
          <Lottie className="w-full" animationData={animationData} />
        </div>
        <div className="text-base font-inter flex flex-col gap-6 col-span-6">
          <h2 className="md:text-3xl text-xl my-5">LET ME INTRODUCE <span className="text-[#E15549]">MYSELF</span></h2> 
       <div className="text-justify">
       <p>
        <span className="text-2xl">🚀 </span>Coding is my escape into a world where life is not just beautiful
            but also exciting and full of meaning. Everything else? Well, that's
            a bit of a puzzle for me.
          </p>
          <p>
          <span className="text-2xl">💻 </span> My most cherished passion is coding, and I believe it provides the utmost assistance in navigating through life. I am a diligent worker, driven by a fervent love for coding and equipped with unwavering determination.
          </p>
          <p>
          <span className="text-2xl"> 🌐 </span> For me, coding is not just about money; it's a journey, and I'm
            thrilled to be part of it.
          </p>
          <p>
           <span className="text-2xl">❤️ </span> I fell head over heels for programming, and my heart beats for
            coding with React.js 
          </p>
          <p>
          <span className="text-2xl"> 🛠️ </span> I adore working with JavaScript APIs, and crafting JSON data/APIs is
            my jam.
          </p>
          <p>
           <span className="text-2xl">🎨 </span> CSS is pure awesomeness, and I love playing around with Tailwind.
          </p>
          <p>
         <span className="text-2xl"> 🤷‍♂️ </span> Designing a frontend or a landing page with React is my absolute
            favorite; it brings me immense joy.
          </p>
          <p>
           <span className="text-2xl">🤖 </span> JavaScript holds a special place in my heart. I strive to be the
            best in this language, always eager to learn something new.
          </p>
          <p>
            
          </p>
       </div>
        </div>
      </div>
      <div>
           <div className="flex-col items-center gap-5 mt-14">
              <p className="my-3 font-cinzel text-lg text-center "><span className="text-[#E15549]">COMFORT</span> WITH</p>
              <div className="flex flex-wrap justify-center gap-8 rounded-full">
                <div className="md:w-24 h-12 md:h-28 w-16 inline-flex items-center justify-center shadow-shadow rounded-md transition-all"> 
                <img className="mx-auto" src={tailwind} alt="" />
                </div> 
                <div className=" md:w-24 h-12  w-16 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                <Lottie className="w-20" animationData={javascript} />
                </div> 
                <div className="md:w-24 h-12 md:h-28 w-16 inline-flex items-center justify-center shadow-shadow rounded-md transition-all">
                <Lottie className="w-20" animationData={react} /> 
                </div>
              
              </div>
            </div>
            <div className="mt-12 text-center">
            <p className=" my-3 font-cinzel text-lg text-center"><span className="text-[#E15549]">FAMILIAR</span> WITH</p>
            <div className="flex flex-wrap justify-center gap-8">
            <div className=" shadow-shadow rounded-md transition-all">
                <Lottie className="md:h-28  h-20" animationData={node} /> 
                </div>
             <div className=" shadow-shadow rounded-md transition-all">
                <Lottie className="md:h-28 h-20" animationData={mongodb} /> 
              </div>
              <div className=" shadow-shadow rounded-md transition-all">
                <Lottie className="md:h-28 h-20" animationData={firebase} /> 
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