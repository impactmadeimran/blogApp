import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from '../../Screens/Posts';
import PostView from '../../Screens/PostView';

const PostScreen = () => {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Posts' screenOptions={
      {
        headerStyle:{
          backgroundColor: '#e9ebf0',
        },headerBackButtonMenuEnabled:false
      }
    } >
      <Stack.Screen name="Posts" component={Posts} options={{headerShown:false}} />
      <Stack.Screen  name="View" component={PostView} options={{title:'',headerStyle:{
        backgroundColor:'fafafa'
      }}} />
    </Stack.Navigator>
  )
}

export default PostScreen

// const styles = StyleSheet.create({})