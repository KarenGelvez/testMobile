import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserListScreen} from '../containers/UserListScreen';
import {UserDetailsScreen} from '../containers/UserDetailsScreen';
import {CreateUserScreen} from '../containers/CreateUserScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

const StackUserList = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#151717',
        headerTitleAlign: 'center',
        headerLeft: () => {
          return (
            <TouchableOpacity>
              <Icon style={styles.menu} name="menu" size={30} color="#000" />
            </TouchableOpacity>
          );
        },
      }}>
      <Stack.Screen name="Usuarios" component={UserListScreen} />
      <Stack.Screen name="Detalle usuario" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

const StackCreateUser = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#151717',
        headerTitleAlign: 'center',
        headerLeft: () => {
          return (
            <TouchableOpacity>
              <Icon style={styles.menu} name="menu" size={30} color="#000" />
            </TouchableOpacity>
          );
        },
      }}>
      <Stack.Screen name="Crear un usuario" component={CreateUserScreen} />
    </Stack.Navigator>
  );
};

export {StackUserList, StackCreateUser};

const styles = StyleSheet.create({
  menu: {
    marginLeft: 10,
  },
});
