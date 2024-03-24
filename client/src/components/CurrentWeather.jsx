import { Container, Divider, Header, Grid } from "semantic-ui-react";

// Renders to view the Current Weather with the props passed down from CurrentWeatherList

function CurrentWeather({
  weatherCondition,
  cityName,
  sunsetTime,
  currentTemperature,
  sunriseTime,
  observedTime,
}) {
  if (!CurrentWeather) return null;

  return (
    <>
      <Container>
        <Grid>
          <Grid.Column textAlign="center">
            <Divider></Divider>
            <Container>
              <Header as="h2">Current Weather in {cityName}: </Header>
            </Container>
            <Divider></Divider>
            <Container>
              Current Weather Condition: {weatherCondition}{" "}
            </Container>
            <Container>
              Current Temperature: {currentTemperature} °C 🌡
            </Container>
            <Container>Sunrise Time:{sunriseTime} </Container>
            <Container>Sunset Time: {sunsetTime} </Container>
            <Container>Weather Last Observed At {observedTime} </Container>
            <Divider></Divider>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}

export default CurrentWeather;
