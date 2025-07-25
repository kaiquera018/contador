import { StyleSheet, View } from 'react-native';
import Counter from '../../components/Counter';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
