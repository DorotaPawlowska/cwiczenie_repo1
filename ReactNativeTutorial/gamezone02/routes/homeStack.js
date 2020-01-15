import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  test: {
    screen: Home, 
    navigationOptions: {
      title: 'GameZone',
      // headerStyle: { backgroundColor: '#333' },
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      // headerStyle: { backgroundColor: '#eee' },
    }
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default HomeStack;