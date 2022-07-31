import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import tw from "tailwind-react-native-classnames";
import api from "../../../utils";
import { AppContext } from "../../../context/AppContext";

const Login = () => {
  const { user, setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Login = (_) => {
    setLoading(true);
    api
      .post("signin/", {
        email,
        password,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <View style={[styles.container, tw`mx-auto`]}>
      <Text style={[tw`text-2xl`]}>Login To Your Account</Text>
      <View style={[tw`mt-4`]}>
        <View style={[tw`pb-4`]}>
          <Text>Email</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            style={[styles.input, tw`p-2 rounded border-gray-500`]}
          />
        </View>
        <View style={[tw`pb-4`]}>
          <Text>Password</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            textContentType="password"
            secureTextEntry={true}
            style={[styles.input, tw`p-2 rounded border-gray-500`]}
          />
        </View>
        <TouchableOpacity
          onPress={Login}
          style={[tw`p-2 flex items-center bg-blue-500`]}
        >
          {loading ? (
            <ActivityIndicator color="#0000ff" size={"small"} />
          ) : (
            <Text style={[tw`text-white`]}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    // alignItems:'center',
    height: "100%",
    width: "80%",
  },
  input: {
    borderWidth: 1,
  },
});
