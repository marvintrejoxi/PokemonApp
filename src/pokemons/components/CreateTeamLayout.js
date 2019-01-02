import React from 'react';
import { View, StyleSheet } from 'react-native';

function CreateTeamLayout(props) {
  return(
    <View>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
})

export default CreateTeamLayout;