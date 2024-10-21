import irrigationMonitoring from "../assets/image/info-img-1.jpeg";
import importance from "../assets/image/info-img-2.jpg";
import systemFlow from "../assets/image/info-img-3.jpg"
import features from "../assets/image/info-img-4.jpg";
import goals from "../assets/image/goals.jpg";
import getstarted from "../assets/image/surveyor-concept-land-surveying-technology-geodesy-science-engineering-topography-equipment-people-with-compass-map-topographic-equipmen.jpg";

const sections = [
	{
	  title: "What is an Automated Irrigation System?",
	  content: [
		"An automated irrigation system uses IoT-based sensors to monitor soil moisture and automate water delivery to crops. It ensures the right amount of water is supplied at the right time, improving crop yield while conserving water.",
		"By analyzing environmental data and crop requirements, the system can activate or deactivate pumps, minimizing water waste and promoting sustainable agriculture.",
	  ],
	  img: irrigationMonitoring, 
	  reverse: false,
	},
	{
	  title: "Why is Smart Irrigation Important?",
	  content: [
		"Efficient irrigation management reduces water consumption and helps prevent over-watering or under-watering of crops.",
		"Smart irrigation promotes sustainable farming practices, ensuring optimal crop health and minimizing resource wastage.",
		"It enables farmers to make data-driven decisions by integrating weather forecasts, crop-specific data, and soil health information.",
	  ],
	  img: importance, 
	  reverse: true,
	},
	{
	  title: "How Our System Works",
	  content: [
		"Our system collects data from soil moisture sensors and sends it to the cloud in real-time.",
		"Using crop-specific datasets and weather APIs, the system analyzes moisture levels to determine whether irrigation is needed.",
		"If needed, the system activates the motor remotely, delivering the precise amount of water required.",
		"Users can monitor the status of the pump and receive notifications through our web application.",
	  ],
	  img: systemFlow,
	  reverse: false,
	},
	{
	  title: "Key Features of Our System",
	  content: [
		"Real-time soil moisture monitoring with IoT sensors",
		"Integration with weather APIs for accurate predictions",
		"Automated motor control for irrigation",
		"User-friendly web interface for monitoring and management",
		"Cloud storage of historical data for insights and analytics",
	  ],
	  img: features,
	  reverse: true,
	},
	{
	  title: "Our Goals",
	  content: [
		"Efficient Water Management through Smart Irrigation",
		"Improving Crop Yield with Automated Systems",
		"Supporting Farmers with Data-Driven Insights",
		"Promoting Sustainable and Resource-Conscious Agriculture",
	  ],
	  img: goals,
	  reverse: false,
	},
	{
	  title: "Get Started with Smart Irrigation",
	  content: [
		"Begin your journey towards efficient water management with our automated irrigation system. With just a few steps, you can monitor, control, and optimize your irrigation process from anywhere, ensuring sustainable use of water resources and healthy crops.",
	  ],
	  img: getstarted,
	  reverse: true,
	},
  ];
  

export default sections;
