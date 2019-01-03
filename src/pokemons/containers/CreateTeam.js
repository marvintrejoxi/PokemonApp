import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import uuid from 'react-native-uuid';
import { NavigationActions, StackActions } from 'react-navigation'

import Loading from '../../shared/components/Loading';
import SelectedTeamLayout from '../components/SelectedTeamLayout';
import CreateTeamLayout from '../components/CreateTeamLayout';
import PokemonListLayout from '../components/PokemonListLayout';

import Empty from '../../shared/components/Empty';
import Pokemon from '../components/Pokemon';
import SelectedPokemon from '../components/SelectedPokemon';
import SelectedTeamEmpty from '../components/SelectedTeamEmpty';
import SaveSelectedTeam from '../components/SaveSelectedTeam';

class CreateTeam extends Component {
  state = {
    loading: true,
    pokedexUrl: '',
    pokemonList: [],
    teamList: [],
    disableSaveButton: true
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: `Arma tu equipo en ${navigation.getParam('name', '')}`
    }
  }

  async componentWillMount() {
    await this.fetchRegion();
    await this.fetchPokedex();
    this.setState({
      loading: false
    })
  }

  async fetchRegion(){
    let urlRegion = this.props.navigation.getParam('url', '');

    await fetch(urlRegion).then(response => {
      return response.json();
    }).then(responseData => {
      if (responseData.pokedexes[0]) {
        this.setState({
          pokedexUrl: responseData.pokedexes[0].url
        })
      }
    }).catch(error => {
      console.log(error)
    });
  }

  async fetchPokedex() {
    let { pokedexUrl } = this.state

    if (pokedexUrl.length > 0) {
      await fetch(pokedexUrl).then(response => {
        return response.json();
      }).then(responseData => {
        this.setState({
          pokemonList: responseData.pokemon_entries
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }

  keyExtractor = (item) => {
    return(item.pokemon_species.name.toString());
  }

  renderEmpty = () => {
    return(<Empty message='No se encontro ningún pokemon' />);
  }

  renderSelectedTeamEmpty = () => {
    return(<SelectedTeamEmpty />);
  }

  renderPokemon = ({item}) => {
    return(
      <Pokemon 
        {...item} 
        onPokemonSelected={() => { this.pokemonSelected(item)}}
        disableAddButton={this.state.teamList.length < 6 ? false : true }
        onPokemonInfo={() => this.pokemonInfo(item)}
      />
    )
  }

  renderSeletedPokemon = ({item}) => {
    return(
      <SelectedPokemon
        {...item}
        onRemovePokemon={() => {this.removePokemon(item)}}
        onPokemonInfo={() => this.pokemonInfo(item)}
      />
    )
  }

  pokemonSelected = (item) => {
    this.setState({
      teamList: [...this.state.teamList, item]
    })

    const pokemons = [...this.state.pokemonList]
    const filteredItems = pokemons.filter(pokemon => pokemon !== item)
    
    this.setState({
      pokemonList: filteredItems
    })
  }

  removePokemon = (item) => {
    const teamList = [...this.state.teamList]
    const filteredTeamList = teamList.filter(pokemon => pokemon !== item)

    this.setState({
      teamList: filteredTeamList,
      pokemonList: [...this.state.pokemonList, item]
    })
  }

  saveTeam = () => {
    let generateUuid = uuid.v1();
    let id = generateUuid.split('-')[0]

    firebase.database().ref(`pokedexes/${this.props.user.uid}/${id}`).set({
      pokedexUrl: this.state.pokedexUrl,
      urlRegion: this.props.navigation.getParam('url', ''),
      regionName: this.props.navigation.getParam('name', ''),
      team: this.state.teamList
    }).then(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Regions', key: 'Regions' })
        ],
      });
      this.props.navigation.dispatch(resetAction);
      this.props.navigation.dispatch(
        NavigationActions.navigate({ routeName: 'MyTeams', key: 'MyTeams' })
      )
    }).catch((error) => {
      console.log(error)
    });
  }

  pokemonInfo = (item) => {
    const navigationAction = NavigationActions.navigate({
      routeName: 'ShowPokemon',
      params: {
        item: item
      }
    });

    this.props.navigation.dispatch(navigationAction)
  }

  render() {
    if(this.state.loading) {
      return(<Loading />)
    }

    return(
      <CreateTeamLayout>
        <SelectedTeamLayout>
          <FlatList 
            horizontal
            data={this.state.teamList}
            keyExtractor={this.keyExtractor}
            ListEmptyComponent={this.renderSelectedTeamEmpty}
            renderItem={this.renderSeletedPokemon}
          />
          <SaveSelectedTeam 
            onSaveTeam={() => this.saveTeam()}
            disableSaveButton={
              this.state.teamList.length >= 3 ? false : true
            }
          />
        </SelectedTeamLayout>
        <PokemonListLayout>
          <FlatList 
            data={this.state.pokemonList}
            keyExtractor={this.keyExtractor}
            ListEmptyComponent={this.renderEmpty}
            renderItem={this.renderPokemon}
          />
        </PokemonListLayout>
      </CreateTeamLayout>
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize,
    user: state.user,
    baseUrl: state.baseUrl
  }
}

export default connect(mapStateToProps)(CreateTeam);