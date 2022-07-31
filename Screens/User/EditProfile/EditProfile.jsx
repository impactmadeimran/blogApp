import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { AppContext } from '../../../context/AppContext'
import * as ImagePicker from 'expo-image-picker';

const EditProfile = () => {
    const {user} = useContext(AppContext)
    const [image, setImage] = useState(null)

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    }
  return (
    <View>
      <View style={[tw`w-full mt-4 flex items-center justify-center`]}>
        <TouchableOpacity onPress={pickImage}>
            <Text style={[tw`text-center font-semibold py-2`]}>
                Select Image
            </Text>
        <Image
          source={{
            uri: image !== null ? image :
              "https://express-blog-server.herokuapp.com/" + user?.user?.image,
          }}
          style={{
            resizeMode: "cover",
            height: 200,
            width: 200,
            borderRadius: 100,
          }}
        />
        </TouchableOpacity>
      </View>
      <View style={[tw`w-11/12 mx-auto`]}>
        <View style={[tw`pb-4`]}>
            <Text style={[tw`font-semibold pb-2`]}>Email</Text>
            <TextInput style={[tw`border border-gray-400 p-2`]} />
        </View>
        <View style={[tw`pb-4`]}>
            <Text style={[tw`font-semibold pb-2`]}>Full Name</Text>
            <TextInput style={[tw`border border-gray-400 p-2`]} />
        </View>
        <View style={[tw`pb-4`]}>
            <Text style={[tw`font-semibold pb-2`]}>Username</Text>
            <TextInput style={[tw`border border-gray-400 p-2`]} />
        </View>
        <TouchableOpacity style={[tw`bg-blue-500 py-2`]}>
            <Text style={[tw`text-white text-center`]}>Apply Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})