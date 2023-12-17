import Lottie from "lottie-react";
import { useEffect, useState } from "react";
// import { FaGithub, FaGlobe } from "react-icons/fa";  
import { FaGithub, FaGlobe } from "react-icons/fa";  
import { Link } from "react-router-dom";
import frontend from "../../../public/frontend.json";  
import AOS from 'aos'; 
import 'aos/dist/aos.css';   
AOS.init();

const Projects = () => {
  const [projects, setProjects] = useState([]); 

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data); 
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []); 

  return (
   <div data-aos="fade-down-left" > 
    <div className="text-center"> 
      <h3 className=" text-2xl md:text-3xl my-3">Discover My Recent <span className="text-[#E15549]">Projects</span></h3>
      <p className="md:text-xl text-base">Explore a Snapshot of My Latest Front-End Developments - Check Them Out!</p>
    </div>
    <div className=" flex justify-center">  
          {/* <img className="h-[550px] mx-auto" src={bannerImg} alt="" /> */}  
          <Lottie className="w-[250px]" animationData={frontend} />    
        </div>
     <div className="grid gtid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto p-5">
      {projects.map((item) => (
        <div
          key={item.id}
          className="card border-4 border-[#A1724E] hover:border-5 shadow-xl p-5 ransition-colors duration-1000"
        >
          <div className="w-full h-[80%] overflow-hidden shadow-xl">
            <img
              className="w-full h-60 object-cover hover:scale-110 duration-300 cursor-pointer"
              src={item.image}
              alt="src"
            />
          </div>
          <div className="mt-5">
            <h2 className="card-title">
              <div>{item.title}</div>
            </h2>
            <div className="badge badge-secondary mt-3">{item.date}</div>
            <p className="my-3">{item.description}</p>
            <div className="card-actions justify-end">
              <Link
                to={item.git_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="badge badge-outline py-4 rounded text-[#482307] bg-[#FFFFFF] inline-flex justify-center items-center hover:text-designColor duration-300 cursor-pointer gap-2">
                  <FaGithub className="text-lg"></FaGithub>{" "}
                  <span className="font-semibold font-inter">Github</span>
                </div>
              </Link>
              <Link  to={item.demo}
                target="_blank"
                rel="noopener noreferrer">
                <div className="badge badge-outline py-4 rounded text-[#482307] bg-[#FFFFFF] inline-flex justify-center items-center hover:text-designColor duration-300 cursor-pointer gap-2">
                  <FaGlobe></FaGlobe>{" "}
                  <span className="font-semibold font-inter">Demo</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Projects;
