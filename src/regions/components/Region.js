import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

function Region(props) {
  const imageUrl = `http://localhost:8081/assets/images/${props.name}.png`
  return(
    <TouchableOpacity
      onPress={props.onPress}
    >
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.image}
      >
        <View style={styles.container}>
          <Text style={styles.name}>
            {props.name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    height: 68,
    resizeMode: 'contain',
    // marginVertical: 10,
    borderWidth: 2,
    borderColor: '#d9d9d9',
    marginVertical: 5,
  },
  container: {
    paddingVertical: 10,
  },
  name: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
  }
});

export default Region;