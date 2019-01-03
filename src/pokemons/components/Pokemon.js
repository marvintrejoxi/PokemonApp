import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function Pokemon(props) {
  return(
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={require('../../../assets/images/pokeball.jpg')}
          style={styles.pokeball}
        />
        <Text style={styles.name}>
          {props.pokemon_species.name}
        </Text>
      </View>
      <View style={styles.actionButtons}>
        <Button 
          title='Agregar'
          onPress={props.onPokemonSelected}
          disabled={props.disableAddButton}
        />
        <Button 
          container
          title='Información'
          onPress={props.onPokemonInfo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 3,
    borderColor: '#f9f9f9',
    margin: 10
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
  pokeball: {
    height: 50,
    width: 70,
    resizeMode: 'contain'
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#000',
    color: '#fff'
  },
  name: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    paddingVertical: 5,
  }
  
})

export default Pokemon;
