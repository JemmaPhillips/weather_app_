import { useState, useEffect } from "react";
import LocationForm from "../components/LocationForm";
import CurrentWeatherList from "../components/CurrentWeatherList";
import ForecastWeather from "../components/ForecastWeather";
import ForecastWeatherList from "../components/ForecastWeatherList";
import { Divider } from "semantic-ui-react";
import { getWeathers, postWeather } from "../WeatherService";
import WeatherGrid from "../components/WeatherGrid";

// set up app state to store current weather, forecasts and database persisted weather info
function WeatherContainer() {
  const [currentWeather, setCurrentWeather] = useState([{}]);
  const [forecastWeather, setForecastWeather] = useState([{}]);
  const [location, setLocation] = useState("");
  const [weatherSaves, setWeatherSaves] = useState([]);

  useEffect(() => {
    getWeathers().then((allWeathers) => {
      setWeatherSaves(allWeathers);
    });
  }, []);

  const addWeatherSave = (weatherSave) => {
    setWeatherSaves(weatherSaves.concat(weatherSave));
  };

  const handleSubmit = (input) => {
    if (input.includes(",")) {
      // input format assumed to be Lat,Lon
      const formattedInput = input
        .split(",")
        .map((i) => i.trim())
        .join(",");
      getCurrentWeatherAsLatLon(formattedInput);
      getForecastWeatherAsLatLon(formattedInput);
    } else if (
      /^\d{5}(-\d{4})?$/.test(input) ||
      /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(input)
    ) {
      // input format for this needs to be compatible with postcode and zip code
      getCurrentWeatherAsPostcode(input.replace(/\s/g, ""));
      getForecastWeatherAsPostcode(input.replace(/\s/g, ""));
    } else {
      // input format as a city name
      getCurrentWeatherAsCity(input);
      getForecastWeatherAsCity(input);
    }
  };

  const getCurrentWeatherAsCity = (location) => {
    const url = `https://api.weatherbit.io/v2.0/current?city=${location}&key=cbb4f9e74e5749c6bf30f687d5e5b4e6`;
    fetchWeatherData(url, setCurrentWeather);
  };

  const getCurrentWeatherAsLatLon = (location) => {
    const [lat, lon] = location.split(",");
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=cbb4f9e74e5749c6bf30f687d5e5b4e6`;
    fetchWeatherData(url, setCurrentWeather);
  };

  const getCurrentWeatherAsPostcode = (location) => {
    const url = `https://api.weatherbit.io/v2.0/current?postal_code=${location}&key=cbb4f9e74e5749c6bf30f687d5e5b4e6`;
    fetchWeatherData(url, setCurrentWeather);
  };

  const getForecastWeatherAsCity = (location) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=cbb4f9e74e5749c6bf30f687d5e5b4e6`;
    fetchWeatherData(url, setForecastWeather);
  };

  const getForecastWeatherAsLatLon = (location) => {
    const [lat, lon] = location.split(",");
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=cbb4f9e74e5749c6bf30f687d5e5b4e6`;
    fetchWeatherData(url, setForecastWeather);
  };

  const getForecastWeatherAsPostcode = (location) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${location}&key=cbb4f9e74e5749c6bf30f687d5e5b4e6`;
    fetchWeatherData(url, setForecastWeather);
  };

  const fetchWeatherData = (url, setState) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
        postWeather(data).then((returnedData) => {
          addWeatherSave(returnedData);
          getWeathers().then((allWeathers) => {
            // re-fetch weather saves
            setWeatherSaves(allWeathers);
          });
        });
      });
  };

  return (
    <>
      <LocationForm
        handleSubmit={handleSubmit}
        location={location}
        setLocation={setLocation}
      />
      <CurrentWeatherList
        location={location}
        currentWeather={currentWeather.data}
      />
      <ForecastWeatherList
        location={location}
        forecastWeather={forecastWeather.data}
      />
      <Divider>
        <ForecastWeather />
      </Divider>
      <WeatherGrid
        weatherSaves={weatherSaves}
        removeWeatherSave={(id) => {
          setWeatherSaves(weatherSaves.filter((save) => save._id !== id));
        }}
      />
    </>
  );
}

export default WeatherContainer;
