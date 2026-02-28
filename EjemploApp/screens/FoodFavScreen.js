import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

export default function FoodFavScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mis Comidas Favoritas</Text>
      
      {/* Usando los nombres de archivos exactos de tu carpeta assets */}
      <Image source={require('../assets/pizza.jpg')} style={styles.img} />
      <Image source={require('../assets/Birria.jpg')} style={styles.img} />
      <Image source={require('../assets/ensalada.jpg')} style={styles.img} />

      <View style={styles.buttonContainer}>
        <Button 
          title="Volver a Sobre Mí" 
          onPress={() => navigation.navigate('AboutMe')} 
          color="#ff0000"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 10, 
    alignItems: 'center', 
    backgroundColor: '#7b2828' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#ffffff'
  },
  img: { 
    width: 300, 
    height: 330, 
    marginBottom: 20, 
    borderRadius: 15,
    resizeMode: 'cover'
  },
  buttonContainer: { 
    marginTop: 10, 
    width: '80%',
    marginBottom: 30
  }
});