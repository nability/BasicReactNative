import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [beratBadan, setBeratBadan] = useState<string>('');
  const [tinggiBadan, setTinggiBadan] = useState<string>('');
  const [hasil, setHasil] = useState<number | null>(null); 
  const [kategori, setKategori] = useState<string>('');

  const hitungIMT = () => {
    const beratBadanNum = parseFloat(beratBadan);
    const tinggiBadanNum = parseFloat(tinggiBadan);

    if (!isNaN(beratBadanNum) && tinggiBadanNum > 0) {
      const tinggiMeter = tinggiBadanNum / 100;
      const imt = beratBadanNum / (tinggiMeter * tinggiMeter);
      const imtFixed = parseFloat(imt.toFixed(2));

      setHasil(imtFixed);

      if (imtFixed < 18.5) {
        setKategori('Kekurangan Berat Badan');
      } else if (imtFixed >= 18.5 && imtFixed < 24.9) {
        setKategori('Berat Badan Normal');
      } else if (imtFixed >= 25 && imtFixed < 29.9) {
        setKategori('Kelebihan Berat Badan');
      } else {
        setKategori('Obesitas');
      }
    } else {
      setHasil(null);
      setKategori('Input tidak valid');
    }
};

   return (
    <View style={styles.container}>
      <Text style={styles.judul}>Hitung Indeks Massa Tubuh (IMT)</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Berat Badan (kg)"
        keyboardType="numeric"
        value={beratBadan}
        onChangeText={setBeratBadan}
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan Tinggi Badan (cm)"
        keyboardType="numeric"
        value={tinggiBadan}
        onChangeText={setTinggiBadan}
      />

      <Button title="Hitung" onPress={hitungIMT} />

      {hasil !== null && (
        <View style={styles.hasilContainer}>
          <Text style={styles.hasil}>Indeks Massa Tubuh: {hasil}</Text>
          <Text style={styles.kategori}>Kategori: {kategori}</Text>
        </View>
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
        textAlign: 'center',
      },
      input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#fff',
        textAlign: 'center',
      },
      hasilContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      hasil: {
        fontSize: 18,
        fontWeight: '600',
      },
      kategori: {
        fontSize: 16,
        marginTop: 5,
        color: '#333',
      },
    });