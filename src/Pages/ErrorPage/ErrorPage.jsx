
import Lottie from "lottie-react";
import erroranimation from "../../../public/error.json";
import goback from "../../../public/gobackhome.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Link   to="/">
            <button className=" mt-5 ml-5">
                
            <Lottie className=" w-24" animationData={goback} /> 

            </button>
            </Link>
            <div className="text-center mt-8">
                <p className="text-pink-600 text-2xl">Sorry !</p>
                <p  className="text-pink-600 text-4xl">Page Not Found </p>
            </div>
            <div className=" w-80 h-full mx-auto h-80vh my-28 flex items-center justify-center"> 
            <p className="text-pink-600 text-2xl">404 !</p>
         <Lottie className="w-52" animationData={erroranimation} />
        </div>
        </div>
    );
};

export default ErrorPage;