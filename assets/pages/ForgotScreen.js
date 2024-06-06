import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ForgotScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const emailField = route.params?.emailField;
  const cpfField = route.params?.cpfField;
  const dataNascimentoField = route.params?.dataNascimentoField;

  const handleHomeClick = () => {
    navigation.goBack();
  };

  const handleEnviarButton = () => {
    navigation.navigate('Enviar', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtButton}>Books Online</Text>
      </View>
      <View>
        <Text style={styles.linha}></Text>
      </View>
      <View>
        <Text style={styles.inputTxt}>
          Insira suas informações para gerar uma nova senha:
        </Text>
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Digite seu email"
          placeholderTextColor="#d1d1d1"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>CPF</Text>
        <TextInput
          style={styles.inputField}
          placeholder="000.000.000-00"
          placeholderTextColor="#d1d1d1"
          value={cpfField}
          onChangeText={(t) => setCpfField(t)}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Data de Nascimento</Text>
        <TextInput
          style={styles.inputField}
          placeholder="00/00/0000"
          placeholderTextColor="#d1d1d1"
          value={dataNascimentoField}
          onChangeText={(t) => setDataNascimentoField(t)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEnviarButton}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9B82C2',
  },
  txtButton: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    margin: 20,
  },
  linha: {
    borderWidth: 1,
    width: '150%',
    marginHorizontal: '400px',
    borderColor: '#C5B1E7',
    marginLeft: -50,
  },
  inputTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 7,
    marginHorizontal: 10,
    margin: 10,
  },
  inputArea: {
    width: '100%',
    paddingTop: 20
  },
  inputLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
    marginHorizontal: 10,
  },
  inputField: {
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ddd',
    fontSize: 15,
    padding: 10,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#32004a',
    width: '95%',
    padding: 10,
    borderRadius: 5,
    margin: 20
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
