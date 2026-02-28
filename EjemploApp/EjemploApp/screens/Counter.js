import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CounterScreen({ navigation }) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel de Control</Text>
      
      <View style={styles.counterBox}>
        <Text style={styles.label}>Valor Actual</Text>
        <Text style={styles.value}>{count}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.circleButton, {backgroundColor: '#EF4444'}]} onPress={() => setCount(count - 1)}>
          <Text style={styles.circleButtonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.circleButton, {backgroundColor: '#10B981'}]} onPress={() => setCount(count + 1)}>
          <Text style={styles.circleButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.actionButton, {backgroundColor: '#6366F1'}]} 
        onPress={() => navigation.navigate("ExampleEvent", { total: count, nombre: 'Usuario' })}
      >
        <Text style={styles.buttonText}>Enviar Datos a Eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.actionButton, {backgroundColor: '#9CA3AF'}]} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.backButton]} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>← Volver a Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 25, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '800', textAlign: 'center', color: '#111827', marginBottom: 40 },
  counterBox: { alignItems: 'center', marginBottom: 30 },
  label: { fontSize: 14, color: '#6B7280', textTransform: 'uppercase', letterSpacing: 1 },
  value: { fontSize: 80, fontWeight: '900', color: '#111827' },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 },
  circleButton: { width: 70, height: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center', elevation: 5 },
  circleButtonText: { color: 'white', fontSize: 30, fontWeight: 'bold' },
  actionButton: { padding: 18, borderRadius: 15, alignItems: 'center', marginVertical: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  backButton: { marginTop: 20, alignItems: 'center' },
  backButtonText: { color: '#4B5563', fontWeight: '600' }
});