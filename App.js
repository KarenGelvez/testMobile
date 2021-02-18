import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {LoginScreen} from './src/presentation/containers/auth/LoginScreen';
import {CreateUserScreen} from './src/presentation/containers/CreateUserScreen';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/presentation/navigation/TabNavigator';

const App = () => {
  const [loggedin, setloggedin] = useState(false);
  return (
    <NavigationContainer>
      {loggedin ? <TabNavigator /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default App;
