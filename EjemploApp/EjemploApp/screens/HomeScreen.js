import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido</Text>
      <Text style={styles.description}>Selecciona una opción para continuar</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#0a3fff' }]} // Verde esmeralda
        onPress={() => navigation.navigate('ExampleEvent', { nombre: 'Roberto', total: 0 })}
      >
        <Text style={styles.buttonText}>Ir a Eventos (con nombre)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ff0000' }]} // Azul brillante
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.buttonText}>Ir a Contador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  text: { fontSize: 32, fontWeight: 'bold', color: '#1F2937', marginBottom: 5 },
  description: { fontSize: 16, color: '#6B7280', marginBottom: 30 },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    marginVertical: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700', textAlign: 'center' },
});