import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import moment from "moment";

const PostItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 4 }}>
        <Text style={[tw`text-gray-500 mb-1`]}>
          {moment(item?.date).format("ll")}
        </Text>
        <Text style={[tw`text-blue-900 font-bold`]}>+ {item?.author}</Text>
        <Text style={[tw`text-lg text-blue-500 font-semibold`]}>
          {item?.title}
        </Text>
        <Text style={[tw`text-gray-600`]}># {item?.topic}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Image
          style={{ resizeMode: "contain", height: 80, width: 80 }}
          source={{
            uri: "https://express-blog-server.herokuapp.com/" + item?.image,
          }}
        />
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    height: 80,
    width: 80,
  },
});
