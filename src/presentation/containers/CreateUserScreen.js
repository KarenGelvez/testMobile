import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../components/CustomButton';
import {CustomTextInput} from '../components/CustomTextInput';

export const CreateUserScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={{margin: 30}}>
          <View style={styles.wrapperIcon}></View>
          <Text style={styles.textLabel}>Nombre</Text>
          <CustomTextInput />
          <Text style={styles.textLabel}>Apellido</Text>
          <CustomTextInput />
          <Text style={styles.textLabel}>Edad</Text>
          <CustomTextInput />
          <Text style={styles.textLabel}>Cargo</Text>
          <CustomTextInput />
          <CustomButton text="Crear" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  wrapperIcon: {
    alignSelf: 'center',
    alignContent: 'center',
    height: 150,
    width: 150,
    margin: 30,
    borderRadius: 100,
    backgroundColor: '#c9c9c9',
  },
  textLabel: {
    fontSize: 16,
  },
});
