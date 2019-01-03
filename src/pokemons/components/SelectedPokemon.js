import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

function SelectedPokemon(props) {
  return(
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require('../../../assets/images/pokeball.jpg')}
          style={styles.pokeball}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.pokemonName}>
          {props.pokemon_species.name}
        </Text>
        <TouchableOpacity 
          onPress={props.onRemovePokemon}
          style={styles.buttonRemove}
        >
          <Text style={styles.text}>
            Quitar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={props.onPokemonInfo}
          style={styles.buttonInfo}
        >
          <Text style={styles.text}>
            Información
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#f9f9f9',
  },
  image: {
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pokeball: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRemove: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonInfo: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#fff'
  }
})

export default SelectedPokemon;