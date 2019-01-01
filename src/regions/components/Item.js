import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

function Item(props) {
  return(
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View>
        <Text>{props.name}</Text>
        <Text>{props.url}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Item;