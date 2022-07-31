import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StackActions } from '@react-navigation/native'
import Main from '../../Screens/User/Main'
import EditProfile from '../../Screens/User/EditProfile'

const User = () => {
  const Stack = createNativeStackNavigator()
  return (
      <Stack.Navigator>
          <Stack.Screen name='Profile' component={Main} options={
            {
              headerShown:false
            }
          } />
          <Stack.Screen name='EditProfile' component={EditProfile} options={{title:"Profile"}} />
      </Stack.Navigator>
  )
}

export default User

const styles = StyleSheet.create({})