import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, } from 'react-native';
import axios from 'axios';
import 'react-native-gesture-handler';
import Posts from './pages/Posts';
import PostView from './pages/PostView'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

axios.defaults.baseURL ='https://express-blog-server.herokuapp.com'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Posts' screenOptions={
          {
            headerStyle:{
              backgroundColor: '#e9ebf0',
            }
          }
        } >
          <Stack.Screen name="Posts" component={Posts} options={{headerShown:false}} />
          <Stack.Screen name="View" component={PostView} options={{title:''}} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ebf0'
  },
});
