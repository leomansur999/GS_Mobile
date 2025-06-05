import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Evento } from '../types/Evento';

export default function Prejuizos({ navigation }: any) {
  const [desc, setDesc] = useState('');

  const salvar = async () => {
    const eventosString = await AsyncStorage.getItem('@eventos');
    const eventos: Evento[] = eventosString ? JSON.parse(eventosString) : [];
    if (eventos.length > 0) {
      eventos[eventos.length - 1].prejuizos = desc;
      await AsyncStorage.setItem('@eventos', JSON.stringify(eventos));
    }
    navigation.navigate('PanoramaGeral');
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Descreva os prejuízos"
        value={desc}
        onChangeText={setDesc}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        multiline
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}