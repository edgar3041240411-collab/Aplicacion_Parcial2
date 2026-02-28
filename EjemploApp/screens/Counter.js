import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Counter({ navigation }) {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.value}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}><Text style={styles.btnText}>Incrementar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}><Text style={styles.btnText}>Disminuir</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setCount(0)}><Text style={styles.btnText}>Reiniciar</Text></TouchableOpacity>
            
            <TouchableOpacity style={[styles.button, {backgroundColor: 'green'}]} onPress={() => navigation.navigate('ExampleEvent', { contador: count })}>
                <Text style={styles.btnText}>Enviar a ExampleEvent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'gray'}]} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 24 },
    value: { fontSize: 60, textAlign: 'center', marginBottom: 20 },
    button: { marginTop: 10, padding: 15, backgroundColor: "#9a0b0b", borderRadius: 10, alignItems: "center" },
    btnText: { color: "#fff", fontWeight: "bold" }
});