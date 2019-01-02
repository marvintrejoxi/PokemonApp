import React from 'react';
import { View, StyleSheet } from 'react-native';

function SelectedTeamLayout(props) {
  return(
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    padding: 10,
  }
})

export default SelectedTeamLayout;