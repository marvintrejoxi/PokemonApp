import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import Loading from '../../shared/components/Loading';
import ShowPokemonLayout from '../components/ShowPokemonLayout';
import PokemonInfo from '../components/PokemonInfo';

class ShowPokemon extends Component{

  state = {
    loading: true,
    item: {},
    pokemon: {}
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: `Informacion del pokemon: ${navigation.getParam('item', {}).pokemon_species.name}`
    }
  }

  async componentWillMount(){
    await this.getParamItem();
    await this.fecthPokemon();
    this.setState({
      loading: false
    })
  }

  async getParamItem(){
    const item = this.props.navigation.getParam('item', {})

    this.setState({
      item: item
    })
  }

  async fecthPokemon(){
    let { url } = this.state.item.pokemon_species

    if (url.length > 0) {
      await fetch(url).then(response => {
        return response.json();
      }).then(responseData => {
        this.setState({
          pokemon: responseData
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }

  render(){
    if (this.state.loading) {
      return(<Loading />)
    }
    return(
      <ShowPokemonLayout>
        <PokemonInfo pokemon={this.state.pokemon}/>
      </ShowPokemonLayout>
    )
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize,
    user: state.user,
    baseUrl: state.baseUrl
  }
}

export default connect(mapStateToProps)(ShowPokemon)