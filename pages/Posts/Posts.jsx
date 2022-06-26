import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../utils";
import tw from "tailwind-react-native-classnames";
import PostItem from "./PostItem";

const Posts = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/fetch_posts")
      .then((res) => {
        setPosts(res?.data?.Post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//   console.log(posts);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Posts</Text>
      <View style={styles.items}>
      { posts !== 'undefined' &&
        posts.map((item) => (
            <TouchableOpacity onPress={() => {
                navigation.navigate('View',{id: item._id,title:item?.title})
            }} key={item?._id} style={[tw`bg-white px-3 py-5 flex flex-col rounded my-2 `]} >
            <PostItem item={item} />
            </TouchableOpacity>
        ))
      }
      </View>
    </ScrollView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  items: {
    paddingHorizontal: 20,
    marginVertical: 20,
    overflowVeritcal: "scroll",
  },
});
