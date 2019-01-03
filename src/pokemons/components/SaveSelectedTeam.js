import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function SaveSelectedTeam(props){
  return(
    <View style={style.container}>
      <Button 
        title='Guardar equipo'
        onPress={props.onSaveTeam}
        disabled={props.disableSaveButton}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  }
})

export default SaveSelectedTeam;