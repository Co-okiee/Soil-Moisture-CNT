import cropGif from "../assets/image/crop.gif"
import fertGif from "../assets/image/fert.gif"
import cropYieldGif from "../assets/image/crop_yield.gif";
import cropMarketTrendGif from "../assets/image/crop_market_trend.gif";

const CardData = [
    {
      title: "Crop Recommendation",
      description:"Recommends Location wise suitable crops based on soil types and region specific weather",
      image: cropGif,
      path:"/cropRecommendation"
  
    },
    {
      title: "Fertilizer Recommendation & usage suggestion",
      description:"Advises on the ideal fertilizer for a specific soil and predict optimal fertilizer quantity in kg/Acres",
      image:fertGif,
      path: "/fertilizerRecommendation"
  
    },
    {
      title: "Crop yield predictor",
      description:"Predict spatial-temporal Crop Yield & production based on Geolocation and real time weather updates",
      image:cropYieldGif,
      path: "/cropYieldPredictor"
  
    },
    {
      title: "Crop market Trend Analyzer",
      description:"Analyze the crop and vegetable prices in market and provide suggestions to optimize farmer's profit",
      image:cropMarketTrendGif,
      path: "/cropMarketTrendAnalyzer"
  
    },
  
  ]

export default CardData;