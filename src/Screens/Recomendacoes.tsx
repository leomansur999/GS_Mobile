import React from 'react';
import { View, Text } from 'react-native';

export default function Recomendacoes() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Recomendações:</Text>
      <Text>✅ Mantenha lanternas e baterias sempre acessíveis.</Text>
      <Text>✅ Desligue aparelhos elétricos durante a falta de energia.</Text>
      <Text>✅ Evite contato com cabos soltos na rua.</Text>
      <Text>✅ Tenha água e alimentos não perecíveis disponíveis.</Text>
    </View>
  );
}