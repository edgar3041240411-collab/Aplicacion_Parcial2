import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const miNombre = "Tu Nombre Completo"; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Home</Text>
      
      <TouchableOpacity 
        style={styles.buttonBlue} 
        onPress={() => navigation.navigate('ExampleEvent', { nombre: miNombre })}
      >
        <Text style={styles.buttonText}>Ir a ExampleEvent (con nombre)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonGreen} 
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.buttonText}>Ir a Counter</Text>
      </TouchableOpacity>

      {/* TERCER BOTÓN: Ahora aparecerá debajo de los otros dos */}
      <TouchableOpacity 
        style={styles.buttonPink} 
        onPress={() => navigation.navigate('AboutMe')}
      >
        <Text style={styles.buttonText}>Sobre Mí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3f0000', padding: 20 },
  title: { fontSize: 32, color: '#ffffff', fontWeight: 'bold', marginBottom: 40 },
  buttonBlue: { backgroundColor: '#650505', padding: 20, borderRadius: 12, width: '90%', marginBottom: 15, alignItems: 'center' },
  buttonGreen: { backgroundColor: '#e76c6c', padding: 20, borderRadius: 12, width: '90%', marginBottom: 15, alignItems: 'center' },
  buttonPink: { backgroundColor: '#ff0000', padding: 20, borderRadius: 12, width: '90%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
