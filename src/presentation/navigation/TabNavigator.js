import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {UserDetailsScreen} from '../containers/UserDetailsScreen';
import {StackUserList, StackCreateUser} from './StackNavigator';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#ff4e4e',
        activeBackgroundColor: '#fff',
        keyboardHidesTabBar: true,
        showLabel: false,
      }}>
      <Tab.Screen
        name="UserListScreen"
        component={StackUserList}
        options={{
          tabBarIcon: ({focused}) => {
            let colorIcon;
            focused ? (colorIcon = '#ff4e4e') : (colorIcon = '#fff');
            return <Icon name="account-outline" size={30} color={colorIcon} />;
          },
        }}
      />
      <Tab.Screen
        name="CreateUserScreen"
        component={StackCreateUser}
        options={{
          tabBarIcon: ({focused}) => {
            let colorIcon;
            focused ? (colorIcon = '#ff4e4e') : (colorIcon = '#fff');
            return <Icon name="plus-box-outline" size={30} color={colorIcon} />;
          },
        }}
      />
      <Tab.Screen
        name="UserDetailsScreen"
        component={UserDetailsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            let colorIcon;
            focused ? (colorIcon = '#ff4e4e') : (colorIcon = '#fff');
            return <Icon name="office-building" size={30} color={colorIcon} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
