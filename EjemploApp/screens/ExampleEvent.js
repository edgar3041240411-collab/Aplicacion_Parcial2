import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function ExampleEvent({ route, navigation }) {
    const { nombre = "Invitado", contador = 0 } = route.params || {};

    return (
        <View style={styles.contenedor}>
            <Text style={styles.ejemplo}>Pantalla de Eventos</Text>
            <Text style={styles.texto}>Recibido de Home: {nombre}</Text>
            <Text style={styles.texto}>Recibido de Counter: {contador}</Text>
            
            <Button 
                title="Mostrar Alerta" 
                onPress={() => Alert.alert("Datos del Examen", `Nombre: ${nombre}\nContador: ${contador}`)} 
            />
            <Button title="Volver a Home" onPress={() => navigation.navigate('Home')} color="#666" />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#1a009f" },
    ejemplo: { fontSize: 26, fontWeight: "bold", color: "#fff", textAlign: 'center', marginBottom: 20 },
    texto: { fontSize: 18, color: "white", textAlign: 'center', marginBottom: 10 }
});