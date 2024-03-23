import WeatherCard from "./WeatherCard";
import { Divider, Header } from "semantic-ui-react";

const WeatherGrid = ({ weatherSaves, removeWeatherSave }) => {
  // filter out any weatherSaves without valid data
  const validWeatherSaves = weatherSaves.filter(
    (ws) =>
      ws.data &&
      ws.data.length > 0 &&
      ws.data[0]["city_name"] &&
      ws.data[0]["city_name"] !== ",",
  );

  const weatherSavesList = validWeatherSaves.map((weatherSave) => {
    return (
      <WeatherCard
        key={weatherSave._id}
        weatherSave={weatherSave}
        removeWeatherSave={removeWeatherSave}
      />
    );
  });

  return (
    <>
      <Header as="h2">Your Recent Weather Location Searches</Header>
      <Divider />
      {weatherSavesList.length > 0 ? (
        weatherSavesList
      ) : (
        <div>No recent weather data available.</div>
      )}
    </>
  );
};

export default WeatherGrid;
