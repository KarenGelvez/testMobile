import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {userLoggedin} from '../../../application/actions/auth.action';
import {CustomButton} from '../../components/CustomButton';
import {CustomTextInput} from '../../components/CustomTextInput';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(userLoggedin(true));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/logo.png')}
          style={styles.image}
        />
        <CustomTextInput text="Usuario" />
        <CustomTextInput text="Contraseña" secure={true} />
        <CustomButton text="Iniciar Sesión" onPress={handleLogin} />
        <CustomButton text="Registrarse" btnWhite={true} />
        <View style={styles.viewRights}>
          <Text style={styles.rights}>Powerared by OLSoftware</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingHorizontal: 35,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    width: 150,
    resizeMode: 'contain',
    marginBottom: '10%',
  },

  viewRights: {
    position: 'absolute',
    bottom: 10,
  },
  rights: {
    alignSelf: 'center',
    color: '#171515',
    fontSize: 18,
  },
});
