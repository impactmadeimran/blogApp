import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './navigation/Home/Home';
import AppProvider from './context/AppContext';

axios.defaults.baseURL = 'https://express-blog-server.herokuapp.com'

export default function App() {



  return (
    <SafeAreaProvider style={styles.container}>
      <AppProvider>
        <Home />
      </AppProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginVertical:20,
    flex: 1,
    backgroundColor: 'white',
  },
});
