import ForecastWeather from "./ForecastWeather";
import { Divider, Container, Header } from "semantic-ui-react";

// forecastWeather is the array stored in the data key of the object from the Weatherbit API

function ForecastWeatherList({ forecastWeather }) {
  // return nothing if there is no current weather object, otherwise...
  if (!forecastWeather) return null;

  //  The array stored in the "Data" key is sliced to pass only the 7 days of forecast info desired
  const slicedForecastInfo = forecastWeather.slice(0, 7);

  // Map forecastWeather array to access the JSON keys now that we have the 7 days needed
  const displayForecastWeather = slicedForecastInfo.map((weather) => {
    return (
      <ForecastWeather
        datetime={weather.datetime}
        weatherCondition={weather.weather.description}
        currentTemperature={weather.temp}
      />
    );
  });

  return (
    <>
      <Container>
        <Header as="h2">7 Day Forecast:</Header>
      </Container>
      <Divider></Divider>
      {displayForecastWeather}
    </>
  );
}

export default ForecastWeatherList;
