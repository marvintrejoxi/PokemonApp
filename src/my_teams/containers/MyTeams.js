import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class MyTeams extends Component {
  render() {
    return(
      <View>
        <Text>ESTOY EN MIS EQUIPOS</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(MyTeams)
