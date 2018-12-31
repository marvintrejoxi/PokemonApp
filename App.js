import React, {Component} from 'react';
import {Text} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from './src/AppLayout';
// import firebase from 'react-native-firebase';

// const config = {
//   apiKey: "AIzaSyBjextwT0xfqefiu4FEqJgib32L9PGA39g",
//   authDomain: "pokemonapp-1610b.firebaseapp.com",
//   databaseURL: "https://pokemonapp-1610b.firebaseio.com",
//   projectId: "pokemonapp-1610b",
//   storageBucket: "pokemonapp-1610b.appspot.com",
//   messagingSenderId: "560446545040"
// };
// firebase.initializeApp(config);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <PersistGate
          loading={<Text>Cargando</Text>}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
