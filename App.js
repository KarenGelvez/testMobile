import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {LoginScreen} from './src/presentation/containers/auth/LoginScreen';
import {CreateUserScreen} from './src/presentation/containers/CreateUserScreen';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/presentation/navigation/TabNavigator';
import {Provider} from 'react-redux';
import {store} from './src/application/Store';
import {Main} from './src/presentation/navigation/Main';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
