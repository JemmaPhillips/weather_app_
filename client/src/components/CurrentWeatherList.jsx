import CurrentWeather from "./CurrentWeather";

// currentWeather is the array stored in the data key of the object from the Weatherbit API

function CurrentWeatherList({ currentWeather }) {
  // return nothing if there is no current weather object, otherwise...
  if (!currentWeather) return null;

  // Map currentWeather array to access the JSON keys and pass as props for rendering to view
  const displayCurrentWeather = currentWeather.map((weather) => {
    return (
      <CurrentWeather
        weatherCondition={weather.weather.description}
        cityName={weather.city_name}
        sunsetTime={weather.sunset}
        sunriseTime={weather.sunrise}
        currentTemperature={weather.temp}
        observedTime={weather.ob_time}
      />
    );
  });

  return <>{displayCurrentWeather}</>;
}

export default CurrentWeatherList;
