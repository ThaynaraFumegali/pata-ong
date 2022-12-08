import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import YellowButtonComponent from './YellowButton';

const RegisterUserOkComponent = ({navigation}) => {
  const onPressBackToLoginButton = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require('../images/pata-amarela.png')}
        />
      </View>
      <View style={styles.containerMain}>
        <Text style={styles.registerOkText}>O cadastro está ok!</Text>
        <Text style={styles.informationText}>
          Agora você já pode voltar à tela de login e logar normalmente na
          plataforma
        </Text>
        <Image style={styles.okImage} source={require('../images/ok.png')} />
        <View style={styles.containerButton}>
          <YellowButtonComponent
            label={'Voltar a tela de Login'}
            onPress={onPressBackToLoginButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77477e',
  },
  containerImage: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  containerMain: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  registerOkText: {
    width: '100%',
    padding: 5,
    color: '#ffee4a',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  informationText: {
    width: '100%',
    padding: 5,
    color: '#ffee4a',
    fontSize: 16,
    textAlign: 'center',
  },
  okImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    margin: 10,
  },
  containerButton: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterUserOkComponent;
