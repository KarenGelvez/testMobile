import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export const CustomTextInput = ({text = '', secure = false}) => {
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textinput}
        placeholder={text}
        secureTextEntry={secure}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d5d5d5',
    backgroundColor: '#fff',
    width: '100%',
  },
  textinput: {
    color: '#171515',
    fontSize: 18,
    flexShrink: 1,
    height: 35,
    width: '100%',
    padding: 5,
  },
});
