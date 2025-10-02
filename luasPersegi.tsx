import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [sisi, setSisi] = useState<string>(''); 
  const [hasil, setHasil] = useState<number | null>(null); 

  const hitungLuas = () => {
    const sisiNum = parseFloat(sisi);
    if (!isNaN(sisiNum)) {
      setHasil(sisiNum * sisiNum);
    } else {
      setHasil(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Hitung Luas Persegi</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan panjang sisi"
        keyboardType="numeric"
        value={sisi}
        onChangeText={setSisi}
      />

      <Button title="Hitung" onPress={hitungLuas} />

      {hasil !== null && (
        <Text style={styles.hasil}>Luas Persegi: {hasil}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  hasil: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
  },
});
