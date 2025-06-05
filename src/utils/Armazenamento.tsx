import AsyncStorage from '@react-native-async-storage/async-storage';
import { Evento } from '../types/Evento';

const STORAGE_KEY = '@eventos';

export async function salvarEvento(evento: Evento) {
  const eventosString = await AsyncStorage.getItem(STORAGE_KEY);
  const eventos: Evento[] = eventosString ? JSON.parse(eventosString) : [];
  eventos.push(evento);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(eventos));
}

export async function carregarEventos(): Promise<Evento[]> {
  const eventosString = await AsyncStorage.getItem(STORAGE_KEY);
  return eventosString ? JSON.parse(eventosString) : [];
}