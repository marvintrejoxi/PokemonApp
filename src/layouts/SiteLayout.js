import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Regions from '../regions/containers/Regions';
import CreateTeam from '../pokemons/containers/CreateTeam';
import MyTeams from '../my_teams/containers/MyTeams';
import Logout from '../logout/containers/Logout';

const StackNavigation = createStackNavigator(
  {
    Regions: {
      screen: Regions,
    },
    CreateTeam: {
      screen: CreateTeam,
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: StackNavigation,
      navigationOptions: {
        title: 'Inicio'
      }
    },
    MyTeams: {
      screen: MyTeams,
      navigationOptions: {
        title: 'Mis equipos'
      }
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        title: 'Cerrar sesión'
      }
    }
  }
)
export default createAppContainer(AppNavigator);
