import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

function Loading(props) {
  return(
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  }
});

export default Loading;