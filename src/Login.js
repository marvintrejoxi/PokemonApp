import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

class Login extends Component {
  handlePressGoogle = () => {
    GoogleSignin.configure({});
    GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true
    })

    GoogleSignin.signIn().then(data => {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken
      );

      firebase.auth().signInWithCredential(credential).then(user => {
        this.props.dispatch({
          type: 'SET_USER_INFO',
          payload: {
            name: user.user._user.displayName,
            email: user.user._user.email,
            photo: user.user._user.photoURL,
            uid: user.user._user.uid,
          }
        })
        this.props.dispatch({
          type: 'SET_AUTH',
          payload: {
            authorize: true
          }
        })
      }).catch(error =>{
        console.log(error)
      }).done();
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <GoogleSigninButton
          style={{ width: 200, height: 60 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.handlePressGoogle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(Login)
