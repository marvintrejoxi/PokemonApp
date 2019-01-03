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
    height: 275,
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
})

export default SelectedTeamLayout;