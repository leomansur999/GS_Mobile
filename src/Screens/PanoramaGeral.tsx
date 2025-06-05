import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { carregarEventos } from '../utils/Armazenamento';
import { Evento } from '../types/Evento';

export default function PanoramaGeral({ navigation }: any) {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const dados = await carregarEventos();
      setEventos(dados);
    };
    const unsubscribe = navigation.addListener('focus', fetchData);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Eventos Registrados</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>📍 Local: {item.localizacao}</Text>
            <Text>⏱️ Tempo: {item.tempo}</Text>
            <Text>💥 Prejuízos: {item.prejuizos}</Text>
          </View>
        )}
      />
      <Button title="Nova Localização" onPress={() => navigation.navigate('Localização Atingida')} />
      <Button title="Registrar Tempo" onPress={() => navigation.navigate('Tempo de Interrupção')} />
      <Button title="Registrar Prejuízos" onPress={() => navigation.navigate('Prejuízos Causados')} />
      <Button title="Ver Recomendações" onPress={() => navigation.navigate('Recomendações')} />
    </View>
  );
}