import { Post } from "@/types";
import {
  faEye,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types/navigation"; // ajuste o caminho se precisar

type ListItemProps = {
  post: Post;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ListItem = ({ post }: ListItemProps) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("PostDetail", { postId: post.id })}
    >
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.reactions}>
        <FontAwesomeIcon icon={faHeart} color="red" />
        <Text>{post.reactions.likes}</Text>
        <FontAwesomeIcon icon={faHeartBroken} color="#5539CC" />
        <Text>{post.reactions.dislikes}</Text>
        <FontAwesomeIcon icon={faEye} />
        <Text>{post.views}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    gap: 4,
  },
  title: {
    fontSize: 16,
    color: "#1f1f1f",
  },
  reactions: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
});

export default ListItem;
