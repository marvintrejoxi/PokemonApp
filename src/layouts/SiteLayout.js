import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Regions from '../regions/containers/Regions';
import CreateTeam from '../pokemons/containers/CreateTeam';
import MyTeams from '../my_teams/containers/MyTeams';
import EditTeam from '../pokemons/containers/EditTeam';
import ShowPokemon from '../pokemons/containers/ShowPokemon';
import Logout from '../logout/containers/Logout';

const StackNavigationHome = createStackNavigator(
  {
    Regions: {
      screen: Regions,
    },
    CreateTeam: {
      screen: CreateTeam,
    },
    ShowPokemon: {
      screen: ShowPokemon
    }
  }
);

const StackNavigationMyTeam = createStackNavigator(
  {
    MyTeams: {
      screen: MyTeams,
    },
    EditTeam: {
      screen: EditTeam,
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: StackNavigationHome,
      navigationOptions: {
        title: 'Inicio'
      }
    },
    MyTeams: {
      screen: StackNavigationMyTeam,
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
  },
  {
    tabBarOptions: {
      activeTintColor: '#FF0000',
      labelStyle: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: '800'
      }
    }
  }
)
export default createAppContainer(AppNavigator);
