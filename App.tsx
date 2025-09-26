import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, Alert } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Nabiel 👋</Text>
      <Text style={styles.subtitle}>Welcome to your first React Native App</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Ini tampilan sederhana 🎨</Text>
        <Button
          title="Klik Saya"
          onPress={() => Alert.alert('Hello!', 'Kamu menekan tombol 🚀')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 4, // efek shadow di Android
    shadowColor: '#000', // efek shadow di iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#444',
  },
});

export default App;
