import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../utils";
import tw from "tailwind-react-native-classnames";
import moment from "moment";
import RenderHTML from "react-native-render-html";

const windowWidth = Dimensions.get("window").width;

const PostView = ({ route }) => {
  const { id } = route.params;
  const [post, setpost] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    api
      .post("/fetch_post/", { id: id })
      .then((res) => {
        setLoading(false);
        setpost(res?.data?.post);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator color="#0000ff" size={"large"} />
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw`pt-6 px-4 bg-white`, styles.scroll]}
    >
      <View style={{ paddingBottom: 40 }}>
        <Text style={[tw`text-gray-700`]}>
          {moment(post?.date).format("ll")}
        </Text>
        <Text style={[tw`text-2xl font-semibold pb-2`]}>{post?.title}</Text>
        <Text>Written By: {post?.author}</Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://express-blog-server.herokuapp.com/" + post?.image,
          }}
        />
        <Text>
          {post?.content && (
            <RenderHTML
              source={{ html: post?.content }}
              contentWidth={windowWidth}
            />
          )}{" "}
        </Text>
      </View>
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
  loader: {
    flex: 1,
    justifyContent: "center",
  },
});
