import React from 'react';
import { View, Text, Button } from 'react-native';

function SelectedPokemon(props) {
  return(
    <View>
      <Text>{props.pokemon_species.name}</Text>
      <Button 
        title='Quitar'
        onPress={props.onRemovePokemon}
      />
    </View>
  );
}

export default SelectedPokemon;