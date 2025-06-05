import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Evento } from '../types/Evento';
import { getData, storeData } from '../utils/Armazenamento';

export default function Prejuizos() {
  const [damage, setDamage] = useState<string>('');

  const saveDamage = async () => {
    const events: Evento[] = (await getData('events')) || [];
    if (events.length > 0) {
      events[events.length - 1].damage = damage;
      await storeData('events', events);
      setDamage('');
      alert('Prejuízo salvo!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descreva os prejuízos</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={damage}
        onChangeText={setDamage}
        multiline
        placeholder="Ex: Alimentos perdidos, equipamentos danificados"
      />
      <Button title="Salvar Prejuízo" onPress={saveDamage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }
});