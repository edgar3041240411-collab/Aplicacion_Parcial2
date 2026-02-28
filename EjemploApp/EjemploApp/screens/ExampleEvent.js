import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

// EL CAMBIO ESTÁ AQUÍ: Agregamos { navigation } como argumento
export default function ExampleEvent({ navigation, route }) { 
    const handlePress = () => Alert.alert('Botón presionado');
    
    // Extraemos ambos parámetros de forma segura
    const { nombre = 'Invitado', total = 0 } = route.params || {}; 

    const handleShowData = () => {
        Alert.alert(`Datos recibidos \nContador: ${total}`);
    };   

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hola {nombre}</Text>
            <Text style={styles.text}>El contador es: {total}</Text>
            
            <Button title="Presionar Botón Nativo" onPress={handlePress} color="red" />

            <TouchableOpacity onPress={handleShowData} style={styles.customButton}>
                <Text style={styles.buttonText}>Mostrar datos en Alerta</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
                style={styles.buttonHome}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: '#007f64', padding: 20 },
    text: { fontSize: 24, color: '#fff', textAlign: 'center', marginBottom: 20 },
    customButton: { backgroundColor: 'red', padding: 15, borderRadius: 5, marginTop: 20 },
    buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
    buttonHome: { backgroundColor: '#4B5563', padding: 15, borderRadius: 5, marginTop: 20 }
});