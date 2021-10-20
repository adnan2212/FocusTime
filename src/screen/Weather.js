import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const apiURL =
  'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=e4e9e5c57be7c0bfa4b7947d64de1806'; 


export default class App extends React.Component {
  state = {
    isLoaded: false,
    weatherData: {},
  };

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     this.getWeatherData(position.coords.latitude, position.coords.longitude);
    //   },
    //   error => {
    //     this.setState({error: 'Error While Getting weather update'})
    //   }
    // )
    this.getWeatherData();
    //console.log(this.state.waetherData.main);
  }

  getWeatherData() {
    return (
      fetch(apiURL)
      .then(data => data.json())
      .then(dataJSON =>
        this.setState({ weatherData: dataJSON, isLoaded: true })
      )
      .catch(error => console.log(error))
    );
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <View style={styles.container}>
          <Text>{this.state.weatherData.name}</Text>
          <Text style={{fontSize: 50, fontWeight: "bold"}}>{this.state.weatherData.main.temp}</Text>
          <Text>{`${this.state.weatherData.weather[0].main} - ${this.state.weatherData.weather[0].description}`}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Getting Weather Data
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
