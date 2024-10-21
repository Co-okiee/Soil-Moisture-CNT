import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import OptimalCropImg from "../../assets/image/optimal_croping_season.png";
import optimalCroping from "../../assets/image/optimal_croping.jpeg";

const OptimalCropSeasonCardContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    return navigate("/optimalCropSeason");
  };

  return (
    <div className="py-20">
      <div
        className="w-full flex flex-wrap mx-auto justify-center items-center bg-opacity-50 
        max-w-[1450px] rounded-3xl md:py-10"
      >
        {/* Image Div (Order: 1 on small screens, 3 on large screens) */}
        <div
          className="w-full order-1 md:order-3 md:flex-[0_0_40%] md:w-auto p-4 text-center mb-8 md:mb-0"
        >
          <img
            src={optimalCroping}
            alt="Groundwater Analysis"
            className="w-[90%] max-w-[200px] md:max-w-[350px] mx-auto 
            md:w-[min(90%,_400px)] rounded-3xl"
            data-aos="fade-up"
          />
        </div>

        {/* Heading (Order: 2 on all screens) */}
        <div className="w-full md:flex-[0_0_55%] md:w-auto p-4 md:p-4 flex items-center">
          <h1 className="text-3xl mb-8 flex items-center" data-aos={"fade-up"}>
            Optimal Cropping Season Predictor{" "}
            <img src={OptimalCropImg} alt="" className="w-12 h-12 ml-2" />
          </h1>
        </div>

        {/* Text and Button (Order: 3 on small screens, 2 on large screens) */}
        <div
          className="w-full order-2 md:order-2 md:flex-[0_0_55%] md:w-auto p-4 md:p-8"
        >
          <p className="text-[20px]" data-aos={"fade-up"}>
            The Optimal Cropping Season Predictor is an intelligent tool
            designed to help users determine the ideal season for growing
            specific crops. It analyzes a variety of factors, including cropping
            year, crop type, and state, to provide accurate recommendations,
            ensuring farmers achieve the best yield with minimal water and
            resource usage.
          </p>
          <button
            className="mt-6 w-full md:w-auto px-6 py-3 bg-emerald-600 text-white rounded-lg 
            font-semibold transition duration-500 ease-in-out transform hover:scale-105 
            hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 
            focus:ring-emerald-500"
            onClick={handleButtonClick}
            data-aos={"fade-up"}
          >
            Find Optimal Cropping Season
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptimalCropSeasonCardContainer;
