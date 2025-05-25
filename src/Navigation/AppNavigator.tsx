import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './Home';  // seu Bottom Tabs navigator
import PostDetailScreen from '../Screens/PostDetailScreen';  // atenção no caminho relativo

export type RootStackParamList = {
  HomeTab: undefined;
  PostDetail: { postId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
