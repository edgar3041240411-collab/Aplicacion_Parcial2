import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AboutMeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mí</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.info}>Caballero López Edgar Alfredo</Text>
        
        <Text style={styles.label}>Carrera:</Text>
        <Text style={styles.info}>Desarrollo de Software</Text>

        {/* Nuevo apartado de Descripción solicitado */}
        <Text style={styles.label}>Descripción:</Text>
        <Text style={styles.info}>
          Estudiante de 5°A Clasica, el cual le gusta programar, entrenar y andar en bicicleta. Midiendo 
          1,83 de estatura
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FoodFav')}>
        <Text style={styles.btnText}>Ver Comidas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoviesFav')}>
        <Text style={styles.btnText}>Ver Películas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor: '#666'}]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#c76161', padding: 20, borderRadius: 10, width: '100%', marginBottom: 20 },
  label: { fontWeight: 'bold', color: '#ffffff' },
  info: { fontSize: 18, marginBottom: 10 },
  button: { backgroundColor: '#af1313', padding: 15, borderRadius: 10, width: '90%', marginBottom: 10, alignItems: 'center' },
  btnText: { color: '#ffffff', fontWeight: 'bold' }
});