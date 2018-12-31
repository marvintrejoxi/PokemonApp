import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { StackActions } from 'react-navigation'

class Home extends Component {
  handlePress = () => {
    this.props.dispatch({
      type: 'DESTROY_SESSION',
      payload: {}
    })
  }

  goToRegions = () => {
    this.props.navigation.dispatch(StackActions.push({
      routeName: 'Regions'
    }));
  }

  render() {
    console.log(this.props.user)
    return(
      <View>
        <Text>EN HOME: {this.props.user.name}</Text>
        <Button
          title='Ir a las regiones'
          onPress={this.goToRegions}
        />
        <Button
          title='cerrar sesion'
          onPress={this.handlePress}
        />
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize,
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
