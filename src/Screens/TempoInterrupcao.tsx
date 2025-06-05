import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Evento } from '../types/Evento';

export default function TempoInterrupcao({ navigation }: any) {
  const [tempo, setTempo] = useState('');

  const salvar = async () => {
    const eventosString = await AsyncStorage.getItem('@eventos');
    const eventos: Evento[] = eventosString ? JSON.parse(eventosString) : [];
    if (eventos.length > 0) {
      eventos[eventos.length - 1].tempo = tempo;
      await AsyncStorage.setItem('@eventos', JSON.stringify(eventos));
    }
    navigation.navigate('PanoramaGeral');
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Digite o tempo de interrupção"
        value={tempo}
        onChangeText={setTempo}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}