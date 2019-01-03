import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function PokemonInfo(props){
  return(
    <View>
      <View style={styles.containerImage}>
        <Image
          source={require('../../../assets/images/pokeball.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>
          Nombre: 
        </Text>
        <Text style={styles.value}>
          {props.pokemon.name}
        </Text>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>
          Número de pokemon: 
        </Text>
        <Text style={styles.value}>
          {props.pokemon.id}
        </Text>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>
          Color: 
        </Text>
        <Text style={styles.value}>
          {props.pokemon.color.name}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  containerImage: {
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    height: 75,
    width: 120,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular'
  },
  value: {
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'Lato-Light',
    paddingLeft: 10,
  }
})

export default PokemonInfo;