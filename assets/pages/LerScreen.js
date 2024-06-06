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

export default function LerScreen() {
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
      <Image style={styles.image} source={require('../image/aguarde.png')} />
      <Text style={styles.inputTxt}>Aguarde! Logo vem atualização...</Text>
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
    width: 200,
    height: 200,
    marginTop: 10
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
