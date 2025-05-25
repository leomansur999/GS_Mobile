import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { dummyApi } from "@/api";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PostDetail, CommentResponse, Comment } from "@/types";

type PostDetailRouteProp = RouteProp<{ PostDetail: { postId: number } }, 'PostDetail'>;

const PostDetailScreen = () => {
  const route = useRoute<PostDetailRouteProp>();
  const { postId } = route.params;

  const [post, setPost] = useState<PostDetail | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPostDetail = async () => {
    const { data } = await dummyApi.get<PostDetail>(`post/${postId}`);
    setPost(data);
  };

  const fetchComments = async () => {
    const { data } = await dummyApi.get<CommentResponse>(`comments/post/${postId}`);
    setComments(data.comments);
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchPostDetail();
      await fetchComments();
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  if (!post) {
    return <Text style={styles.error}>Post não encontrado</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.tags}>Tags: {post.tags.join(", ")}</Text>

      <Text style={styles.commentsTitle}>Comentários:</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.username}>{item.user.username}</Text>
            <Text>{item.body}</Text>
            <Text>Likes: {item.likes}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red', textAlign: 'center', marginTop: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  body: { fontSize: 16, marginBottom: 8 },
  tags: { fontStyle: 'italic', marginBottom: 16 },
  commentsTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
  comment: { marginBottom: 12, padding: 8, backgroundColor: '#f0f0f0', borderRadius: 8 },
  username: { fontWeight: 'bold' },
});

export default PostDetailScreen;
