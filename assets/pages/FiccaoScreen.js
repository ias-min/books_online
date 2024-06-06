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

export default function FiccaoScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const name = route.params?.name;

  const handleHomeClick = () => {
    navigation.goBack();
  };
  const handleLerButton = () => {
    navigation.navigate('Ler', { name: name });
    //navigation.navigate('About', {cor: name}
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtButton}>Books Online</Text>
        <Text style={styles.generos}>Ficção</Text>
      </View>
      <View>
        <Text style={styles.linha}></Text>
      </View>
      <View>
        <Text style={styles.txtEscolhe}>Pesquise um livro:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Qual livro você quer?"
          placeholderTextColor="#d1d1d1"
        />
      </View>
      <View>
        <Text style={styles.linha}></Text>
      </View>
      <View style={styles.alinhar}>
        <View style={styles.viewLivros}>
          <Image
            style={styles.livros}
            source={require('../image/pequeno.jpeg')}
          />
        </View>
        <View>
          <Text style={styles.txtBold}>Título:</Text>
          <Text style={styles.txtNome}>O Pequeno Priíncipe</Text>
          <Text style={styles.txtBold}>Autor(es):</Text>
          <Text style={styles.txtNome}>Antoine de Saint-Exupéry</Text>
          <Text style={styles.txtBold}>Lançamento:</Text>
          <Text style={styles.txtNome}>1943</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLer} onPress={handleLerButton}>
        <Text style={styles.buttonText}>Ler</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.linha}></Text>
      </View>
      <View style={styles.alinhar}>
        <View style={styles.viewLivros}>
          <Image
            style={styles.livros}
            source={require('../image/duna.jpeg')}
          />
        </View>
        <View>
          <Text style={styles.txtBold}>Título:</Text>
          <Text style={styles.txtNome}>Duna</Text>
          <Text style={styles.txtBold}>Autor(es):</Text>
          <Text style={styles.txtNome}>Frank Herbert</Text>
          <Text style={styles.txtBold}>Lançamento:</Text>
          <Text style={styles.txtNome}>1965</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLer} onPress={handleLerButton}>
        <Text style={styles.buttonText}>Ler</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.linha}></Text>
      </View>
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
    marginVertical: 11,
  },
  generos: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    marginLeft: 20,
  },
  txtEscolhe: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  inputField: {
    width: 350,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 2,
    marginLeft: 10,
    marginTop: 20,
  },
  linha: {
    borderWidth: 1,
    width: '150%',
    marginHorizontal: '400px',
    borderColor: '#C5B1E7',
    marginLeft: -50,
    margin: 10,
  },
  alinhar: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  viewLivros: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  livros: {
    height: 190,
    width: 150,
    borderRadius: 10,
    margin: 10,
  },
  txtBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
    marginLeft: 12,
  },
  txtNome: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 15,
  },
  buttonLer: {
    backgroundColor: '#32004a',
    width: '95%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
});

