import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import QuestionsScreen from './src/screens/QuestionsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Questions: QuestionsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "Mental health",
    }
  }
);

export default createAppContainer(navigator);
