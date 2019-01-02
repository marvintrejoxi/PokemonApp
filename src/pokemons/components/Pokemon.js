import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Pokemon(props) {
  return(
    <View style={styles.container}>
      <Text>{props.pokemon_species.name}</Text>
      <Button 
        title='Agregar'
        onPress={props.onPokemonSelected}
        disabled={props.disableAddButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
})

export default Pokemon;
