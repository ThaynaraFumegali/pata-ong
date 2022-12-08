import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import UserRegistrationInput from '../backend/domain/dto/input/userRegistrationInput';
import RegisteredEmailError from '../backend/domain/errors/registeredEmailError';
import InputFieldComponent from './InputField';
import YellowButtonComponent from './YellowButton';

const RegisterUserComponent = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {userRegistrationService} = route.params;

  const onPressRegisterButton = async () => {
    const userRegistrationInput = new UserRegistrationInput(
      email,
      password,
      name,
      '',
      '51',
      '991503383',
    );

    try {
      await userRegistrationService.register(userRegistrationInput);
      navigation.navigate('RegisterUserOk');
    } catch (error) {
      // if (error instanceof RegisteredEmailError) {
      // }
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={require('../images/pata-amarela.png')}
          />
        </View>
        <View style={styles.containerRegisterText}>
          <Text style={styles.registerText}>Cadastre-se</Text>
        </View>
        <View style={styles.containerFields}>
          <InputFieldComponent
            label={'Nome:'}
            placeHolder={'Digite seu nome completo'}
            value={name}
            onChange={setName}
          />
          <InputFieldComponent
            label={'E-mail:'}
            placeHolder={'Digite seu email completo'}
            value={email}
            onChange={setEmail}
          />
          <InputFieldComponent
            label={'Senha:'}
            placeHolder={'Digite sua senha completa'}
            value={password}
            onChange={setPassword}
            isPassword={true}
          />
          <View style={styles.containerRegisterButton}>
            <YellowButtonComponent
              label={'Cadastrar'}
              onPress={onPressRegisterButton}
            />
          </View>
        </View>
      </ScrollView>
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
  containerRegisterText: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: '#ffee4a',
    fontWeight: 'bold',
    fontSize: 20,
  },
  containerFields: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    alignSelf: 'center',
  },
  containerRegisterButton: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
  },
});

export default RegisterUserComponent;
