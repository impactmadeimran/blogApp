// import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import PostScreen from '../PostScreen/PostScreen';
import User from '../User/UserScreen';
import UserIcon from 'react-native-vector-icons/EvilIcons'

const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            // tabBarInactiveTintColor:"#fff"
          })}
        >
          <Tab.Screen name="Home" component={PostScreen} options={{
            tabBarIcon: ({ color }) => {

              return <Icon name="home" color={color} size={20} />
            }
          }} />
          <Tab.Screen name='User' component={User} options={{
            tabBarIcon: ({ color }) => {
              return <UserIcon name="user" color={color} size={30} />
            }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default Home

// const styles = StyleSheet.create({})