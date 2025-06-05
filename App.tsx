import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LocalizacaoAtingida from './src/Screens/LocalizacaoAtingida';
import PanoramaGeral from './src/Screens/PanoramaGeral';
import Prejuizos from './src/Screens/Prejuizos';
import Recomendacoes from './src/Screens/Recomendacoes';
import TempoInterrupcao from './src/Screens/TempoInterrupcao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PanoramaGeral">
        <Stack.Screen name="Panorama Geral" component={PanoramaGeral} />
        <Stack.Screen name="Localização Atingida" component={LocalizacaoAtingida} />
        <Stack.Screen name="Tempo de Interrupção" component={TempoInterrupcao} />
        <Stack.Screen name="Prejuízos Causados" component={Prejuizos} />
        <Stack.Screen name="Recomendações" component={Recomendacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}