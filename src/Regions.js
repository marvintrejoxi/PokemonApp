import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Regions extends Component {
  render() {
    return(
      <View>
        <Text>ESTOY EN LAS REGIONES</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(Regions)
