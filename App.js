import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WeatherInfo } from './src/components/WeatherInfo';
import { WeatherSearch } from './src/components/WeatherSearch';

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherSearch/>
      <WeatherInfo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});
