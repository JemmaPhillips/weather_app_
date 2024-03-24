import { deleteWeather } from "../WeatherService";
import { Button } from "semantic-ui-react";

const WeatherCard = ({ weatherSave, removeWeatherSave }) => {
  const handleDelete = () => {
    deleteWeather(weatherSave._id).then(() => {
      removeWeatherSave(weatherSave._id);
    });
  };

  // Check if weatherSave.data and weatherSave.data[0] are defined
  if (!weatherSave || !weatherSave.data || weatherSave.data.length === 0) {
    // Render a fallback UI or return null to avoid rendering
    return <div>No weather data available</div>;
  }

  return (
    <>
      <h3>
        City: {weatherSave.data[0]["city_name"]},{" "}
        {weatherSave.data[0]["country_code"]}{" "}
      </h3>
      <p>
        Forecast at time of search:{" "}
        {weatherSave.data[0]["weather"]["description"]}
      </p>
      <p>Temperature: {weatherSave.data[0]["temp"]} °C 🌡</p>
      <Button onClick={handleDelete}> Delete 🗑 </Button>
      <hr></hr>
    </>
  );
};

export default WeatherCard;
