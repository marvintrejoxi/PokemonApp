import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {

  handlePress = () => {
    this.props.dispatch({
      type: 'SET_AUTH',
      payload: {
        authorize: true
      }
    })
  }

  render() {
    return(
      <View>
        <Text>EN Login</Text>
        <Button 
          title='Iniciar sesion'
          onPress={this.handlePress}
        />
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(Login)
