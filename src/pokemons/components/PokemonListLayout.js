import React from 'react';
import { View, StyleSheet } from 'react-native';

function PokemonListLayout(props) {
  return(
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  }
})

export default PokemonListLayout;