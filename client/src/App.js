
import {Container, Grid} from 'semantic-ui-react';
import AppHeader from './components/AppHeader';
import CurrentWeatherContainer from "./containers/WeatherContainer";


function App() {
  return (
  <>
     <Container className="App">
            <Grid>
            <Grid.Column textAlign="center">
                <AppHeader />
                <CurrentWeatherContainer />
            </Grid.Column>
            </Grid>
        </Container>
  </>
  );
}

export default App;
