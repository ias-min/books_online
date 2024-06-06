import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import InfantilScreen from '../pages/InfantilScreen';
import ForgotScreen from '../pages/ForgotScreen';
import CadastroScreen from '../pages/CadastroScreen';
import ComediaScreen from '../pages/ComediaScreen';
import RomanceScreen from '../pages/RomanceScreen';
import FiccaoScreen from '../pages/FiccaoScreen';
import NovelaScreen from '../pages/NovelaScreen';
import BioScreen from '../pages/BioScreen';
import GastronomiaScreen from '../pages/GastronomiaScreen';
import AventuraScreen from '../pages/AventuraScreen';
import TerrorScreen from '../pages/TerrorScreen';
import EnviarScreen from '../pages/EnviarScreen';
import LerScreen from '../pages/LerScreen';

const MainStack = createNativeStackNavigator();
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Books Online',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#32004a',
            height: 100,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <MainStack.Screen
        name="About"
        component={AboutScreen}
        options={({ route }) => ({
         
        })}
      />
      <MainStack.Screen
        name="Esqueci"
        component={ForgotScreen}
        options={({ route }) => ({
          
        })}
      />
      <MainStack.Screen
        name="Cadastro"
        component={CadastroScreen}
        options={({ route }) => ({
          
        })}
      />
      <MainStack.Screen
        name="Infantil"
        component={InfantilScreen}
        options={({ route }) => ({
          
        })}
      />
      <MainStack.Screen
        name="Comedia"
        component={ComediaScreen}
        options={({ route }) => ({
          
        })}
      />
      <MainStack.Screen
        name="Romance"
        component={RomanceScreen}
        options={({ route }) => ({
         
        })}
      />
      <MainStack.Screen
        name="Ficcao"
        component={FiccaoScreen}
        options={({ route }) => ({
        })}
      />
      <MainStack.Screen
        name="Novela"
        component={NovelaScreen}
        options={({ route }) => ({
        })}
      />
      <MainStack.Screen
        name="Biografia"
        component={BioScreen}
        options={({ route }) => ({
        })}
      />
      <MainStack.Screen
        name="Gastronomia"
        component={GastronomiaScreen}
        options={({ route }) => ({
        })}
      />
      <MainStack.Screen
        name="Aventura"
        component={AventuraScreen}
        options={({ route }) => ({
        })}
      />
      <MainStack.Screen
        name="Terror"
        component={TerrorScreen}
        options={({ route }) => ({
        })}
      />
      <MainStack.Screen
        name="Enviar"
        component={EnviarScreen}
        options={({ route }) => ({
          title: route.params?.name,
        })}
      />
      <MainStack.Screen
        name="Ler"
        component={LerScreen}
        options={({ route }) => ({
          title: route.params?.name,
        })}
      />
    </MainStack.Navigator>
  );
};
