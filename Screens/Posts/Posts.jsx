import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../utils";
import tw from "tailwind-react-native-classnames";
import PostItem from "./PostItem";

const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, []);

  const fetchPosts = (_) => {
    setRefreshing(true);
    api
      .get("/fetch_posts")
      .then((res) => {
        setRefreshing(false);
        setLoading(false);
        setPosts(res?.data?.Post);
      })
      .catch((err) => {
        setRefreshing(false);
        setLoading(false);
        console.log(err);
      });
  };

  //   console.log(posts);

  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator color="#0000ff" size={"large"} />
    </View>
  ) : (
    // <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <RefreshControl refreshing={refreshing} onRefresh={fetchPosts} />
        <Text style={styles.header}>Home</Text>
        <View style={styles.items}>
          {posts !== "undefined" &&
            posts.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("View", {
                    id: item._id,
                    title: item?.title,
                  });
                }}
                key={item?._id}
                style={[tw` border-b border-gray-300 px-3 py-5 flex flex-col rounded my-2 `]}
              >
                <PostItem item={item} />
              </TouchableOpacity>
            ))}
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
    paddingHorizontal: 5,
    marginVertical: 20,
    overflowVeritcal: "scroll",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  container:{
    backgroundColor:"white",
    paddingTop:60
  }
});
