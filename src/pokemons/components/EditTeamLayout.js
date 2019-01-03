import React from 'react';
import { View, StyleSheet } from 'react-native';

function EditTeamLayout(props) {
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

export default EditTeamLayout;