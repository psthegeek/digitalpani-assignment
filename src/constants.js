import clearSky from "./assets/clear-sky.jpg";
import fewclouds from "./assets/cloudy.jpg";
import scatteredClouds from "./assets/scattered.jpg";
import brokenClouds from "./assets/broken.jpg";
import showerRain from "./assets/showered-rain-1.jpg";
import rainImg from "./assets/rain-2.jpg";
import thunderstormImg from "./assets/thunderstorm.jpg";
import snowImg from "./assets/snow-2.jpg";
import overcastclouds from "./assets/overcast clouds.jpg";
import hazeImg from "./assets/haze.jpg";
import drizzle from "./assets/drizzle.jpg";
import heavyRainImg from "./assets/heavy-rain.jpg";
import moderateImg from "./assets/moderate-rain.jpg";
import raggedImg from "./assets/ragged-shower-rain.jpg";
import lightRain from "./assets/light rain.jpg";
import lightIntesnity from "./assets/light-intensity-shower.jpg";
import extremeRainImg from "./assets/rain-2.jpg";
import veryHeavyRain from "./assets/rain-3.jpg";
import mistImg from "./assets/misty.jpg";
import fogImg from "./assets/fog.jpg";
import sandDirtImg from "./assets/sand.jpg";
import tornadoImg from "./assets/tornado.jpg";
import dustImg from "./assets/dust.jpg";
import squallImg from "./assets/squall.jpg";
import lightThunderstorm from "./assets/light-thunderstorm.jpg";
import volcanicAshImg from "./assets/volcanic-ash.jpg";

export const backgrounds = {
     // Define mapping between weather conditions and background images
  'clear sky': clearSky,
  
  //thunderstorm 
  'thunderstorm': thunderstormImg,
  'thunderstorm with light rain': lightThunderstorm,
  'thunderstorm with heavy rain': thunderstormImg,
  'thunderstorm with drizzle': lightThunderstorm,
  'thunderstorm with heavy drizzle': thunderstormImg,
  'thunderstorm with light drizzle': lightThunderstorm,
  'ragged thunderstorm': thunderstormImg,
  'heavy thunderstorm': thunderstormImg,
  'light thunderstorm': lightThunderstorm,

  //Clouds
  'few clouds': fewclouds,
  'scattered clouds': scatteredClouds,
  'broken clouds': brokenClouds,
  'overcast clouds': overcastclouds,

  //Atmosphere
  'mist': mistImg,
  'smoke': mistImg,
  'haze': hazeImg,
  'sand/dust whirls': sandDirtImg,
  'fog': fogImg,
  'sand': sandDirtImg,
  'dust': dustImg,
  'volcanic ash': volcanicAshImg,
  'squall': squallImg,
  'tornado': tornadoImg,
  
   //snow
   'snow': snowImg,
   'light snow': snowImg,
   'heavy snow': snowImg,
   'sleet': snowImg,
   'light shower sleet': snowImg,
   'shower sleet': snowImg,
   'light rain and snow': snowImg,
   'rain and snow': snowImg,
   'light shower snow': snowImg,
   'shower snow': snowImg,
   'heavy shower snow': snowImg,

    //rain
    'rain': rainImg,
    'shower rain': showerRain,
    'ragged shower rain': raggedImg,
    'heavy intensity shower rain': heavyRainImg,
    'light intensity shower rain': lightIntesnity,
    'freezing rain': rainImg,
    'extreme rain': extremeRainImg,
    'very heavy rain': veryHeavyRain,
    'moderate rain': moderateImg,
    'heavy intensity rain': heavyRainImg,
    'light rain': lightRain,
 
    //drizzle
    'drizzle': drizzle,
    'light intensity drizzle': drizzle,
    'heavy intensity drizzle': drizzle,
    'light intensity drizzle rain': drizzle,
    'drizzle rain': drizzle,
    'heavy intensity drizzle rain': drizzle,
    'shower rain and drizzle': drizzle,
    'heavy shower rain and drizzle': drizzle,
    'shower drizzle': drizzle,

};
