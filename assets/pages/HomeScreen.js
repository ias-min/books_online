import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [senhaField, setSenhaField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [cpfField, setCpfField] = useState('');
  const [dataNascimentoField, setDataNascimentoField] = useState('');
  const [passwordField, setPasswordField] = useState('');




  const handleAboutClick = () => {
    setName(senhaField)
    setSenhaField(name)
    if(name!= '' && senhaField != ''){
      navigation.navigate('About', { name: name });
    }
    //navigation.navigate('About', {cor: name})
  };

  const handleForgotButton = () => {
    navigation.navigate('Esqueci', { name: name });
    //navigation.navigate('About', {cor: name}
  };

  const handleSignUpButton = () => {
    navigation.navigate('Cadastro', { name: name });
    //navigation.navigate('About', {cor: name}
  };

  const handleEnviarButton = () => {
    navigation.navigate('Enviar', { name: name });
    //navigation.navigate('About', {cor: name}
  };  

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../image/logo2.png')} />
      <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
      <View style={styles.inputArea}>
      
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor="#d1d1d1"
          style={styles.input}
          value={name}
          onChangeText={(t) => setName(t)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          placeholder="**********"
          placeholderTextColor="#d1d1d1"
          style={styles.input}
          value={senhaField}
          onChangeText={(t) => setSenhaField(t)}
          autoCapitalize="none"
          secureTextEntry
        />
      </View>
      <View style={styles.aditionals}>
        <TouchableOpacity
          style={styles.forgotBtnArea}
          onPress={handleForgotButton}>
          <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAboutClick}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.signUpArea}>
        <Text style={styles.signUpText}>Não tem conta?</Text>
        <TouchableOpacity onPress={handleSignUpButton}>
          <Text
            style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
            onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerArea}>
        <Text style={styles.footerText}>Criado por Iasmin Estevão</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9B82C2',
  },
  input: {
    width: 320,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 2,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: -10,
  },
  h2: {
    marginTop: 20,
    color: '#fff',
    fontSize: 15,
  },
  inputLabel: {
    color: '#32004a',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputArea: {
    paddingTop: 20,
  },
  forgotBtnArea: {
    paddingVertical: 20,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#32004a',
  },
  aditionals: {
    width: '80%',
    marginTop: -15,
  },
  button: {
    backgroundColor: '#32004a',
    width: '80%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
  signUpArea: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 3,
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#32004a',
    marginLeft: 5,
    marginBottom: 68,
  },
  footerArea: {
    marginVertical: 30,
  },
  footerText: {
    fontSize: 13,
    color: '#fff',
  },
  menu: {
    width: 60,
    height: 60,
  },
});
