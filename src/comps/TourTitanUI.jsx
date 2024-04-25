import { useState, useEffect } from 'react';
import axios from 'axios';
import defaultBgImage from "../assets/cold.jpg"; // Default background image
import Wishlist from './Wishlist';
import logo from "../assets/logo.png";
import { backgrounds } from '../constants';

function TourTitanUI() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(defaultBgImage);
  
  const API_KEY = 'adde377b63c30ca06edd7d9e0ea6b435';

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const saveToWishlist = () => {
    const isCityInWishlist = wishlist.some(item => item.name === weather.name && item.sys.country === weather.sys.country);
    
    if (!isCityInWishlist) {
      setWishlist([...wishlist, weather]);
      localStorage.setItem('wishlist', JSON.stringify([...wishlist, weather]));
    }
  };

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlist.filter((item, idx) => idx !== index);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      setError('');
      updateBackground(response.data.weather[0].description);
    } catch (error) {
      setWeather(null);
      setError('City not found. Please try again.');
      updateBackground(defaultBgImage);
    }
  };

  const updateBackground = (weatherDescription) => {
    const background = backgrounds[weatherDescription.toLowerCase()] || defaultBgImage;
    setBackgroundImage(background); 
  };

  const getWeatherIcon = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div>
      <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <img src={logo} alt="Logo" className="absolute top-0 left-0 w-20 h-20 mt-2 ml-4" />
        <div className="bg-white p-8 rounded bg-opacity-20 backdrop-blur-lg shadow-md  relative">
       
          <h1 className="text-3xl font-bold mb-2 text-center text-blue-950">TourTitan</h1>
          <h3 className='text-sm font-semibold mb-4 text-center text-pink-950'>Know the weather of your destination place</h3>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
            />
            <button
              onClick={fetchWeather}
              className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
            >
              Get Weather
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {weather && (
            <div className="text-center ">
              <h2 className="text-2xl font-semibold">{weather.name}, {weather.sys.country}</h2>
              <p className="text-pink-900">{weather.weather[0].description}</p>
              <div className="flex justify-center items-center mt-2">
                <img src={getWeatherIcon(weather.weather[0].icon)} alt="Weather Icon" className="w-16 h-16 mr-4" />
                <p className="text-6xl font-bold">{weather.main.temp}&deg;C</p>
              </div>
              <div className="flex justify-center mt-4">
                <div className="mr-8">
                  <p className="text-gray-900">Min Temp: <span className="text-blue-950 font-bold">{weather.main.temp_min}&deg;C</span> </p>
                  <p className="text-gray-900">Max Temp: <span className="text-blue-950 font-bold">{weather.main.temp_max}&deg;C</span> </p>
                </div>
                <div>
                  <p className="text-gray-900">Humidity: <span className="text-blue-950 font-bold">{weather.main.humidity}%</span></p>
                  <p className="text-gray-900">Wind Speed: <span className="text-blue-950 font-bold">{weather.wind.speed} m/s</span> </p>
                </div>
              </div>
              {!wishlist.some(item => item.name === weather.name && item.sys.country === weather.sys.country) ? (
                <button onClick={saveToWishlist} className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
                  Add to Wishlist
                </button>
              ) : (
                <button disabled className="bg-gray-500 text-white py-2 px-4 rounded mt-4 cursor-not-allowed">
                  Already in Wishlist
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {wishlist.length > 0 && <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />}
    </div>
  );
}

export default TourTitanUI;
