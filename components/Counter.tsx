import { exportarContagemPDF } from '@/utils/generatePDF';
import { AdMobBanner } from 'expo-ads-admob';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCounter } from '../hooks/useCounter';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Banner no topo */}
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7608549463612808/1588920351" // ID de teste oficial (troque pelo seu real depois)
          servePersonalizedAds
          onDidFailToReceiveAdWithError={(err) => console.log(err)}
        />

        <ScrollView contentContainerStyle={styles.content}>

          <Text style={styles.title}>Contador</Text>
          <Text style={styles.count}>{count}</Text>

          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.decrement]} onPress={decrement}>
              <Text style={styles.buttonText}>-1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.increment]} onPress={increment}>
              <Text style={styles.buttonText}>+1</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.smallButton, styles.reset]} onPress={reset}>
            <Text style={styles.buttonText}>Resetar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.smallButton, styles.export]} onPress={() => exportarContagemPDF(count)}>
            <Text style={styles.buttonText}>Exportar PDF</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Banner no rodapé */}
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7608549463612808/5903569883" // ID real
          servePersonalizedAds
          onDidFailToReceiveAdWithError={(err) => console.log(err)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  count: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#2e86de',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 16,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  smallButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 6,
  },
  increment: {
    backgroundColor: '#27ae60',
  },
  decrement: {
    backgroundColor: '#e67e22',
  },
  reset: {
    backgroundColor: '#c0392b',
  },
  export: {
    backgroundColor: '#2980b9',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
