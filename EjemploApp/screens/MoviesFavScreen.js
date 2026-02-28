import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

export default function MoviesFavScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Texto con letras blancas según tu petición */}
      <Text style={styles.title}>Películas Favoritas</Text>

      {/* Imágenes corregidas sin textos extraños */}
      <Image source={require('../assets/solomon_kane.jpg')} style={styles.img} />
      <Image source={require('../assets/rocky.jpg')} style={styles.img} />
      <Image source={require('../assets/Demon.jpg')} style={styles.img} />

      <View style={styles.buttonContainer}>
        <Button 
          title="Volver a Sobre Mí" 
          onPress={() => navigation.navigate('AboutMe')} 
          color="#ff0000" // Color del texto del botón para que resalte
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    alignItems: 'center', 
    backgroundColor: '#7b2828' // Color de fondo vino que pediste
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#ffffff' // Letras blancas que pediste
  },
  img: { 
    width: 300, 
    height: 400, 
    marginBottom: 20, 
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff0000' // Un borde blanco para que las fotos luzcan mejor
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
    marginBottom: 40
  }
});