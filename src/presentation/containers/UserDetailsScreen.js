import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const UserDetailsScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});
