import { Container, Header, Grid } from "semantic-ui-react";

// Renders to view the Forecast Weather with the props passed down from ForecastWeatherList

function ForecastWeather({ datetime, weatherCondition, currentTemperature }) {
  if (!datetime) return null;

  return (
    <>
      <Container>
        <Grid>
          <Grid.Column textAlign="center">
            <Container>
              <Header as="h4">Date: {datetime} 🗓</Header>
            </Container>
            <Container>Condition: {weatherCondition} </Container>
            <Container>Temperature: {currentTemperature} °C 🌡</Container>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}

export default ForecastWeather;
