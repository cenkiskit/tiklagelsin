/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useDispatch } from 'react-redux';
import RootNavigator from './src/Navigation/RootNavigator';
import createStore from './src/Redux/CreateStore';

const App = () => {

  const { store } = createStore()

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
