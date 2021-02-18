import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export const CustomTextInput = ({text = '', secure = false, value = ''}) => {
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textinput}
        placeholder={text}
        secureTextEntry={secure}
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginVertical: 10,
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
