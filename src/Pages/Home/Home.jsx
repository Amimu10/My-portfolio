import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
// import Lottie from "lottie-react";
// import animationData from "../../../public/background.json";

const Home = () => {
  return (
    <section className="relative bg-[#482307] rounded-lg h-100vh">
      {/* <div className="absolute w-full inset-0">
        <Lottie className=" w-full lg:w-full lg:hidden" animationData={animationData}  />  
      </div> */}
      <Banner></Banner> 
    
    </section>
  );
};

export default Home;

// import Banner from "./Banner/Banner";
// import Lottie from "lottie-react";
// import animationData from "../../../public/background.json";

// const Home = () => {
//   return (
//     <div className="max-w-full mx-auto bg-[#402570] relative">
//       <div className="absolute inset-0"> 
//         <Lottie className="lg:mt-0 inset-0 lg:w-full "
//           animationData={animationData}
//           style={{ height: "100%", width: "100%" }}
//         />
//       </div>
//       <Banner /> 
//     </div>
//   );
// };

// export default Home;
