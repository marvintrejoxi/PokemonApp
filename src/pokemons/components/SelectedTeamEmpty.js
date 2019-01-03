import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SelectedTeamEmpty(props){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        Debes seleccionar al menos 3 pokemons y un maximo de 6
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#f9f9f9',
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 8,
  }
})
export default SelectedTeamEmpty;