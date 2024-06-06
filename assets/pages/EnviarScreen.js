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

export default function EnviarScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const name = route.params?.name;

  const handleHomeClick = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtButton}>Books Online</Text>
      </View>
      <View>
        <Text style={styles.linha}></Text>
      </View>
      <Image style={styles.image} source={require('../image/enviar.png')} />
      <Text style={styles.inputTxt}>
        Olá! Confira seu e-mail, pois lá estará a sua nova senha para acessar o
        aplicativo.
      </Text>
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
    width: '180%',
    marginHorizontal: '400px',
    borderColor: '#C5B1E7',
    marginLeft: -70,
  },
  image: {
    width: 150,
    height: 150,
  },
  inputTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 7,
    marginHorizontal: 10,
    margin: 10,
  },
});
