import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Evento } from '../types/Evento';
import { getData, storeData } from '../utils/Armazenamento';

export default function TempoInterrupcao() {
  const [time, setTime] = useState<string>('');

  const saveTime = async () => {
    const events: Evento[] = (await getData('events')) || [];
    if (events.length > 0) {
      events[events.length - 1].time = time;
      await storeData('events', events);
      setTime('');
      alert('Tempo salvo!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tempo sem energia (em horas)</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
        placeholder="Ex: 5"
      />
      <Button title="Salvar Tempo" onPress={saveTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }
});