import React from "react";
// 1. Cambiamos 'alert' por 'Alert' con mayúscula
import { View, Text, StyleSheet, Button, Alert } from "react-native";

// 2. Agregamos llaves a { navigation } para que funcione el ruteo
export default function ExampleEvent({ navigation }) {
    return (
        <View style={styles.contenedor}>
            <Text style={style.ejemplo}>Ejemplo Evento</Text>
            {/* 3. Usamos Alert.alert() correctamente */}
            <Button 
                title="Aplastar" 
                onPress={() => Alert.alert('Presionado', '¡El botón funciona!')} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgb(26, 0, 159)",
    },
});

const style = StyleSheet.create({
    ejemplo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#b6d9ff",
        alignSelf: "center",
    }
});