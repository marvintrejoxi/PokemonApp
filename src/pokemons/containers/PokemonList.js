import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class PokemonList extends Component {
  render() {
    return(
      <View>
        <Text>AQUI TENDRIA QUE MOSTRAR TODA LA LISTA DE POKEMONES DE LA REGION SELECCIONADA</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(PokemonList)
