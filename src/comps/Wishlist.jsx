
import backgroundImage from "../assets/family-bg.jpg";

function Wishlist(prop) {
    const { wishlist, removeFromWishlist } = prop
    const getWeatherIcon = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

        <h1 className="text-3xl font-bold mb-4 text-center text-blue-950">Wishlist</h1>
        {wishlist.map((item, index) => (
          <div key={index} className="bg-white bg-opacity-80 p-4 rounded shadow-md mb-4">
            <h2 className="text-2xl font-semibold">{item.name}, {item.sys.country}</h2>
            <p className="text-gray-600">{item.weather[0].description}</p>
            <div className="flex justify-center items-center mt-4">
              <img src={getWeatherIcon(item.weather[0].icon)} alt="Weather Icon" className="w-16 h-16 mr-4" />
              <p className="text-6xl font-bold">{item.main.temp}&deg;C</p>
            </div>
            <div className="flex justify-center mt-4">
              <div className="mr-8">
                <p className="text-gray-600">Min Temp: {item.main.temp_min}&deg;C</p>
                <p className="text-gray-600">Max Temp: {item.main.temp_max}&deg;C</p>
              </div>
              <div>
                <p className="text-gray-600">Humidity: {item.main.humidity}%</p>
                <p className="text-gray-600">Wind Speed: {item.wind.speed} m/s</p>
              </div>
            </div>
            <button onClick={() => removeFromWishlist(index)} className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 transition-colors duration-300 focus:outline-none">
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
