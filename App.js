import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { WeatherInfo } from './src/components/WeatherInfo';
import { WeatherSearch } from './src/components/WeatherSearch';
import { useState } from 'react';
import { searchWeather } from './src/service';

export default function App() {

  const [weatherData, setWeatherData] = useState()
  const [status, setStatus] = useState('')

  const handleSearchWeather = async (location) => {
    setStatus('loading')
    try {
      const data = await searchWeather(location)
      setWeatherData(data)
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />
      case 'success':
        return <WeatherInfo weatherData={weatherData} />
      case 'error':
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        )
      default:
        return
    }
  }

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={handleSearchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});
