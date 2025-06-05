import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Evento } from '../types/Evento';
import { getData } from '../utils/Armazenamento';

export default function PanoramaGeral() {
  const [events, setEvents] = useState<Evento[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const stored = await getData('events');
      if (stored) setEvents(stored);
    };
    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Registrados</Text>
      <FlatList
        data={events}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Local: {item.location}</Text>
            <Text>Tempo: {item.time}h</Text>
            <Text>Prejuízos: {item.damage}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#eee', padding: 10, marginBottom: 10, borderRadius: 8 }
});