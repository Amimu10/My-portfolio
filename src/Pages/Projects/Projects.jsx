

import { useEffect, useState } from "react";
// import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaGithub, FaGlobe } from "react-icons/fa";

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
    <div className="grid gtid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto p-5">
      {projects.map((item) => (
          <div key={item.id} className="card  bg-[#222529] p-5 hover:bg-[#1B2028] ransition-colors duration-1000">
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
                <div className="badge badge-outline w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"><FaGithub></FaGithub></div>
                <div className="badge badge-outline w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"><FaGlobe></FaGlobe></div>
              </div>
             </div>
          </div>
     
      ))}
    </div>
  );
};

export default Projects;
