import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PanoramaGeral from './src/Screens/PanoramaGeral';
import LocalizacaoAtingida from './src/Screens/LocalizacaoAtingida';
import TempoInterrupcao from './src/Screens/TempoInterrupcao';
import Prejuizos from './src/Screens/Prejuizos';
import Recomendacoes from './src/Screens/Recomendacoes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PanoramaGeral">
        <Stack.Screen name="PanoramaGeral" component={PanoramaGeral} />
        <Stack.Screen name="Localização Atingida" component={LocalizacaoAtingida} />
        <Stack.Screen name="Tempo de Interrupção" component={TempoInterrupcao} />
        <Stack.Screen name="Prejuízos Causados" component={Prejuizos} />
        <Stack.Screen name="Recomendações" component={Recomendacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}