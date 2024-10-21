import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
	FaChartLine,
	FaRobot,
	FaHeartbeat,
	FaRegLightbulb,
	FaWater,
	FaCloudSun,
} from "react-icons/fa";
import { MdComputer, MdSensors } from "react-icons/md";

// import { BsGraphUp } from "react-icons/bs";
// import { GiWaterDrop, GiGeothermal } from "react-icons/gi";
// import { FaRegChartBar } from "react-icons/fa";

const features = [
	{
	  icon: <MdSensors className="text-emerald-600" />,
	  title: "Real-Time Soil Monitoring",
	  description:
		"Track soil moisture levels in real-time to maintain ideal growing conditions for your crops.",
	},
	{
	  icon: <FaRobot className="text-emerald-600" />,
	  title: "Smart Automated Irrigation",
	  description:
		"Automatically control water pumps based on real-time sensor readings and specific crop needs, reducing manual effort.",
	},
	{
	  icon: <FaWater className="text-emerald-600" />,
	  title: "Maximized Water Efficiency",
	  description:
		"Leverage predictive analytics to minimize water wastage, ensuring sustainable farming and healthy crops.",
	},
	{
	  icon: <FaCloudSun className="text-emerald-600" />,
	  title: "Weather-Aware Irrigation",
	  description:
		"Adjust irrigation schedules dynamically with weather forecasts, ensuring water is not wasted before rain.",
	},
  ];
  

  const FeatureCard = () => {
	useEffect(() => {
	  Aos.init({
		duration: 1000,
	  });
	}, []);
  
	return (
	  <section className="services-section py-8 md:py-12 md:mt-12">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		  <h2 className="text-3xl font-extrabold">Our Features</h2>
		  <p className="mt-4 text-lg leading-6">
			Explore how our smart irrigation system empowers farmers with
			real-time data and intelligent automation for efficient water
			management.
		  </p>
  
		  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
			{features.map((feature, index) => (
			  <div
				key={index}
				data-aos="fade-up"
				className="service-item p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
			  >
				<div className="icon-container mb-4 flex justify-center items-center">
				  <div className="icon text-indigo-600 text-4xl sm:text-5xl lg:text-6xl">
					{feature.icon}
				  </div>
				</div>
				<h3 className="text-xl font-semibold">{feature.title}</h3>
				<p className="mt-2">{feature.description}</p>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  };
  
  export default FeatureCard;
  