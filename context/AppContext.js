import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AppContext = createContext()

const AppProvider = (props) => {

    const [user, setUser] = useState(null)
    const storedata = async _ => {
        try {
            const value = JSON.stringify(user)
            await AsyncStorage.setItem('user', value)
        } catch (err) {
            console.log(err)
        }
    }

    const fetchdata = async _ => {
        try{
            const value = await AsyncStorage.getItem('user')
            if(value !== null){
                setUser(JSON.parse(value))
            }
            console.log(user)
        }
        catch{
            console.log('error')
        }
    }

    useEffect(() => {
        if (user !== null){
            fetchdata()
        }
    },[])

    useEffect(() => {
        if(user!== null){
            storedata()
        }
    }, [user])

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider