import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/HomeScreen';
import SettingsScreen from 'src/screens/SettingsScreen';
import useThemeContext from 'src/util/useThemeContext';
import TabBar from 'src/TabBar';
import DevScreen from 'src/screens/WelcomeScreen';
import CounterScreen from 'src/screens/CounterScreen';

type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Settings: undefined;
};
const BottomTab = createBottomTabNavigator<RootStackParamList>();
export default function RootNavigator() {
  const { colors } = useThemeContext();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.backgrounds.default },
      }}
      tabBar={TabBar}
    >
      <BottomTab.Screen
        name="Feed"
        component={DevScreen}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />

      <BottomTab.Screen name="Profile" component={CounterScreen} />
    </BottomTab.Navigator>
  );
}
