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

export default function AboutScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const name = route.params?.name;

  const handleHomeClick = () => {
    navigation.goBack();
  };

  const handleInfantilButton = () => {
    navigation.navigate('Infantil', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  const handleComediaButton = () => {
    navigation.navigate('Comedia', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  const handleRomanceButton = () => {
    navigation.navigate('Romance', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  const handleFiccaoButton = () => {
    navigation.navigate('Ficcao', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  const handleNovelaButton = () => {
    navigation.navigate('Novela', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  const handleBiografiaButton = () => {
    navigation.navigate('Biografia', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  const handleGastronomiaButton = () => {
    navigation.navigate('Gastronomia', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  const handleAventuraButton = () => {
    navigation.navigate('Aventura', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  const handleTerrorButton = () => {
    navigation.navigate('Terror', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <View>
          <Text style={styles.txtButton}>Books Online</Text>
          <Text style={styles.generos}>Explorar</Text>
        </View>
        <View>
          <Text style={styles.linha}></Text>
        </View>
        <View>
          <Text style={styles.txtEscolhe}>Escolha seu genêro:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Qual genêro textual você quer ler?"
            placeholderTextColor="#d1d1d1"
          />
        </View>
        <View>
          <Text style={styles.linha}></Text>
        </View>
        <View style={styles.viewLinha}>
          <Image
            style={styles.image}
            source={require('../image/desenho.jpg')}
          />
          <Image
            style={styles.image}
            source={require('../image/comedia.png')}
          />
          <Image
            style={styles.image}
            source={require('../image/romance.jpeg')}
          />
        </View>
        <View style={styles.textLinha}>
          <Text style={styles.textOrgazinar} onPress={handleInfantilButton}>
            Infantil
          </Text>
          <Text style={styles.textOrgazinar} onPress={handleComediaButton}>
            Comédia
          </Text>
          <Text style={styles.textOrgazinar} onPress={handleRomanceButton}>
            Romance
          </Text>
        </View>
        <View style={styles.viewLinha}>
          <Image
            style={styles.image}
            source={require('../image/ficcao.jpeg')}
          />
          <Image style={styles.image} source={require('../image/novela.jpg')} />
          <Image style={styles.image} source={require('../image/bio.png')} />
        </View>
        <View style={styles.textLinha}>
          <Text style={styles.textOrgazinar} onPress={handleFiccaoButton}>
            Ficção
          </Text>
          <Text style={styles.textOrgazinar6} onPress={handleNovelaButton}>
            Novela
          </Text>
          <Text style={styles.textOrgazinar6} onPress={handleBiografiaButton}>
            Biografia
          </Text>
        </View>
        <View style={styles.viewLinha}>
          <Image
            style={styles.image}
            source={require('../image/cozinha.png')}
          />
          <Image
            style={styles.image}
            source={require('../image/images.jpeg')}
          />
          <Image style={styles.image} source={require('../image/terror.jpg')} />
        </View>
        <View style={styles.textLinha}>
          <Text style={styles.textOrgazinar7} onPress={handleGastronomiaButton}>
            Gastronomia
          </Text>
          <Text style={styles.textOrgazinar8} onPress={handleAventuraButton}>
            Aventura
          </Text>
          <Text style={styles.textOrgazinar9} onPress={handleTerrorButton}>
            Terror
          </Text>
        </View>
        <View>
          <Text style={styles.linhaDois}></Text>
        </View>
      </View>
      <View style={styles.menuLinha}>
        <Image
          style={styles.menu}
          source={require('../image/icons8-casa-48.png')}
        />
        <Image
          style={styles.menu}
          source={require('../image/icons8-pesquisar-50.png')}
        />
        <Image
          style={styles.menu}
          source={require('../image/icons8-literatura-50.png')}
        />
        <Image
          style={styles.menu}
          source={require('../image/icons8-pessoa-do-sexo-masculino-64.png')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  linha: {
    borderWidth: 1,
    width: '360%',
    borderColor: '#C5B1E7',
  },
  txtEscolhe: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  inputField: {
    width: 320,
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
  viewLinha: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: '10px',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  textLinha: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textOrgazinar7: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: '10px',
  },
  textOrgazinar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: '34px',
  },
  textOrgazinar6: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: '40px',
  },
  textOrgazinar8: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: '38px',
  },
  textOrgazinar9: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: '40px',
  },
  linhaDois: {
    borderWidth: 1,
    width: '150%',
    marginHorizontal: '-20px',
    borderColor: '#C5B1E7',
    marginTop: '30px',
  },
  menuLinha: {
    flexDirection: 'row',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 30,
    marginTop: 20,
  },
  menu: {
    width: 60,
    height: 60,
  },
});
