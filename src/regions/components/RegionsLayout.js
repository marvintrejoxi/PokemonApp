import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function RegionLayout(props){
  return(
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text 
          style={styles.welcomeText}
        >
          Bienvenid@ {props.user.name}, selecciona tu región favorita para comenzar a crear equipos
        </Text>
      </View>
      <View>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red'
  },
  welcome: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: 'bold',
  }
})
export default RegionLayout;