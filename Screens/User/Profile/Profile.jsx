import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../../../context/AppContext";

const Profile = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AppContext);

  const signout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      const user = await AsyncStorage.getItem("user");
      if (user === null) {
        navigation.navigate("Home");
        setUser(null);
        console.log(user);
        console.log("signout");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[tw`h-full w-full `]}>
      <View style={[tw`w-full mt-20 flex items-center justify-center`]}>
        <Image
          source={{
            uri:
              "https://express-blog-server.herokuapp.com/" + user?.user?.image,
          }}
          style={{
            resizeMode: "cover",
            height: 200,
            width: 200,
            borderRadius: 100,
          }}
        />
      </View>
      <View style={[tw`px-10 mt-4 w-full `]}>
        <Text style={[tw`text-lg `]}>
          <Text style={[tw`font-semibold`]}>Email:</Text> {user?.user?.email}
        </Text>
        <Text style={[tw`text-lg mb-4`]}>
          <Text style={[tw`font-semibold`]}>Username:</Text>{" "}
          {user?.user?.username}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={[
            tw`border p-1 mb-4 items-center flex flex-row border-gray-400`,
          ]}
        >
          <Icon name="user" size={20} />
          <Text style={[tw`ml-4  font-semibold`]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={signout}
          style={[tw`border p-1 flex items-center flex-row border-gray-400`]}
        >
          <Icon name="logout" size={20} />
          <Text style={[tw`ml-4 text-red-400 font-semibold`]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
