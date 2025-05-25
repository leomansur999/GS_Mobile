type Home = {
  History: undefined;
  Fiction: undefined;
};

type RootStackParamList = {
  HomeTab: undefined;
  PostDetail: { postId: number };
};

export { Home, RootStackParamList };
