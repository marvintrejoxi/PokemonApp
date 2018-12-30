import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Login';

const AppNavigator = createStackNavigator(
  {
    Login
  }
);

export default createAppContainer(AppNavigator);
