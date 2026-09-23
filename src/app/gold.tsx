
import { View, Text, StyleSheet } from 'react-native';

export default function GoldScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
});