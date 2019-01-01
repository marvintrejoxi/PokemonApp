import React, {Component} from 'react';
import {Text} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from './src/AppLayout';
import Loading from './src/shared/components/Loading';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
