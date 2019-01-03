import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PokemonListLayout(props) {
  return(
    <View style={styles.container}>
      <View style={styles.pokemonListTitle}>
        <Text style={styles.title}>Pokemones disponibles</Text>
      </View>
      <View>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  pokemonListTitle: {
    marginHorizontal: 10
  },
  title: {
    fontSize: 14,
    fontFamily: 'Lato-Light',
    fontWeight: 'bold',
  }
})

export default PokemonListLayout;