import React from 'react';
import {useSelector} from 'react-redux';
import {LoginScreen} from '../containers/auth/LoginScreen';
import {TabNavigator} from './TabNavigator';

export const Main = () => {
  const {userActive} = useSelector((state) => state.auth);
  return <>{userActive ? <TabNavigator /> : <LoginScreen />}</>;
};
