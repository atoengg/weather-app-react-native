import { StyleSheet, View } from 'react-native';
import { WeatherInfo } from './src/components/WeatherInfo';
import { WeatherSearch } from './src/components/WeatherSearch';
import axios from 'axios';
import { API_KEY, BASE_URL } from './src/constant';
export default function App() {

  const searchWeather = (location) => {
    axios
    .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
    .then((response) => {
      const data = response.data
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <WeatherInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});
