import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from '../../pages/Posts';
import PostView from '../../pages/PostView';

const PostScreen = () => {

  const Stack = createNativeStackNavigator();
  return (
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
  )
}

export default PostScreen

// const styles = StyleSheet.create({})