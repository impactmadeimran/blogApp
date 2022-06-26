import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../utils";
import tw from "tailwind-react-native-classnames";
import moment from "moment";

const PostView = ({ route }) => {
  const { id } = route.params;
  const [post, setpost] = useState();
  useEffect(() => {
    api
      .post("/fetch_post/", { id: id })
      .then((res) => {
        setpost(res?.data?.post);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw`mt-6 px-4`, styles.scroll]}
    >
      <Text style={[tw`text-gray-700`]}>{moment(post?.date).format("ll")}</Text>
      <Text style={[tw`text-2xl font-semibold pb-2`]}>{post?.title}</Text>
      <Text>Written By: {post?.author}</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://express-blog-server.herokuapp.com/" + post?.image,
        }}
      />
      <Text>{post?.content}</Text>
    </ScrollView>
  );
};

export default PostView;

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: "100%",
    marginVertical: 20,
  },
  scroll: {},
});
