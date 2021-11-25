import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/UdeC.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const onSignInPressed = () => {
    if ((username.length && password.length) == 0) {
      console.warn('Por favor, ingresa correctamente tus datos');
    } else {
      console.warn('Redirigiendo');
    }
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot password');
  };

  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  const onSignInApple = () => {
    console.warn('Apple');
  };

  const onSignUpPressed = () => {
    console.warn('Sign Up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeHolder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeHolder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Iniciar sesión" onPress={onSignInPressed} />

        <CustomButton
          text="¿Olvidaste tu contraseña?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Iniciar sesión con Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Iniciar sesión con Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4DD4"
        />
        <CustomButton
          text="Iniciar sesión con Apple"
          onPress={onSignInApple}
          bgColor="#E3E3E3"
          fgColor="#363636"
        />
        <CustomButton
          text="¿Aún no tienes una cuenta? Crea una"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
