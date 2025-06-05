import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Evento } from '../types/Evento';
import { getData, storeData } from '../utils/Armazenamento';

export default function LocalizacaoAtingida() {
  const [location, setLocation] = useState<string>('');

  const saveLocation = async () => {
    const events: Evento[] = (await getData('events')) || [];
    const newEvent: Evento = { location, time: '', damage: '' };
    await storeData('events', [...events, newEvent]);
    setLocation('');
    alert('Localização salva!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bairro/Cidade/CEP</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Digite a localização"
      />
      <Button title="Salvar Localização" onPress={saveLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }
});