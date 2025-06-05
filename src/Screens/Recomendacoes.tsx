import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const recommendations: string[] = [
  'Tenha lanternas e baterias sempre à mão.',
  'Evite abrir a geladeira ou o freezer durante a interrupção.',
  'Desligue aparelhos eletrônicos para evitar danos quando a energia voltar.',
  'Informe-se com as autoridades locais sobre o status da ocorrência.',
  'Mantenha um kit de emergência com itens essenciais.'
];

export default function Recomendacoes() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recomendações</Text>
      {recommendations.map((rec, index) => (
        <Text key={index} style={styles.item}>- {rec}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 10 }
});