import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from './Login'
import { AppContext } from '../../context/AppContext'
import Profile from './Profile' 
import AsyncStorage from '@react-native-async-storage/async-storage'
// import {useNavigation} from '@react-navigation/native'


const Main = () => {
  // const [user, setUser] = useState(null)
  const {user} = useContext(AppContext)

  // const load = async _ => {
  //   const user = await AsyncStorage.getItem('user');
  //   if(user !== null){
  //     setUser(JSON.parse(user))
  //   }
  // }
  // useEffect(() => {
  //   load()
  //   console.log(user);
  // },[user])

  // const navigation = useNavigation()

  // const signout = async _ => {
  //   try{
  //    await AsyncStorage.removeItem('user');
  //    const user = await AsyncStorage.getItem('user');
  //    if(user === null){
  //      navigation.navigate('Home');
  //      console.log(user);
  //      setPerson(user)
  //      console.log('signout')
  //    }
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  return (
    <SafeAreaView>
        {
          user === null ? <Login /> : <Profile />
        }
       
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({})