import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Empty(props){
  return(
    <View>
      <Text>{props.message}</Text>
    </View>
  );
}

export default Empty;