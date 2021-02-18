import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const CustomButton = ({text, btnWhite = false, onPress = () => {}}) => {
  return (
    <>
      {btnWhite ? (
        <TouchableOpacity style={styles.buttonRegister} onPress={onPress}>
          <Text style={styles.textbtnRegister}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonLogin} onPress={onPress}>
          <Text style={styles.textbtnLogin}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textbtnLogin: {
    fontSize: 17,
    color: '#fff',
  },
  textbtnRegister: {
    fontSize: 17,
    color: '#ff4e4e',
  },
  buttonLogin: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    height: 45,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#ff4e4e',
  },
  buttonRegister: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    height: 45,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ff4e4e',
    backgroundColor: '#fff',
  },
});
