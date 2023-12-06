// import { useEffect, useState } from "react";
// import { FaGithub, FaGlobe } from "react-icons/fa";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch("/projects.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setProjects(data);
//       })
//       .catch((error) => console.error("Error fetching projects:", error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mx-auto py-6">
//       {projects &&
//         projects.map((item) => (
//           <div key={item.id} className="mb-8 xl:px-12 xl:py-10 overflow-hidden rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 ">
//             <div className="w-full p-4  h-[80%] ">
//               <img
//                 className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
//                 src={item.image} // Assuming you have an 'src' property in your project object
//                 alt="Project"
//               />
//             </div>
//             <div className="w-full flex flex-col gap-6">
//               <div>
//                 <div className="flex items-center justify-between">
//                  <div>
//                  <h3 className="text-base uppercase text-designColor font-normal ">
//                     {item.title}
//                   </h3>
//                   <p>{item.date}</p>
//                  </div>
//                   <div className="flex gap-2">
//                     <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
//                       <FaGithub></FaGithub>
//                     </span>
//                     <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
//                       <FaGlobe></FaGlobe>
//                     </span>
//                   </div>
//                 </div>
//                 <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Projects;

import { useEffect, useState } from "react";
// import { FaGithub, FaGlobe } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
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
