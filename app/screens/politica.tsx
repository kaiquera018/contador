import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PoliticaScreen() {
  const abrirLink = () => {
    Linking.openURL('https://www.notion.so/Contador-de-cliques-23b102fadbb28058af4fd7e1dd2f1e82?source=copy_link');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Política de Privacidade</Text>

      <Text style={styles.description}>
        Esta aplicação coleta dados apenas para uso local. Nenhuma informação pessoal é armazenada em servidores externos.
      </Text>

      <TouchableOpacity style={styles.button} onPress={abrirLink}>
        <Text style={styles.buttonText}>Abrir no navegador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2d3436',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#636e72',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0984e3',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3, // sombra no Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
