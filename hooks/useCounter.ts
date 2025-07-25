import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const STORAGE_KEY = '@contador_valor';

export function useCounter() {
  const [count, setCount] = useState(0);

  // Carrega o valor salvo ao abrir o app
  useEffect(() => {
    const loadCount = async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        setCount(parseInt(saved));
      }
    };
    loadCount();
  }, []);

  // Salva sempre que o contador mudar
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, count.toString());
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1); // 👈 aqui adicionamos
  const reset = () => setCount(0);

  return { count, increment, decrement, reset }; // 👈 exportamos o decrement
}
