import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { salvarEvento } from '../utils/Armazenamento';
import { Evento } from '../types/Evento';
import uuid from 'react-native-uuid';

export default function LocalizacaoAtingida({ navigation }: any) {
  const [local, setLocal] = useState('');

  const salvar = async () => {
    const novoEvento: Evento = {
      id: String(uuid.v4()),
      localizacao: local,
      tempo: '',
      prejuizos: '',
    };
    await salvarEvento(novoEvento);
    navigation.navigate('PanoramaGeral');
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Digite a localização"
        value={local}
        onChangeText={setLocal}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}