import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Home';
import Regions from '../Regions';

const AppNavigator = createStackNavigator(
  {
    Home,
    Regions
  }
);

export default createAppContainer(AppNavigator);
