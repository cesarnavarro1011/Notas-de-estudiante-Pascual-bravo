import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';

export default function App() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [nota4, setNota4] = useState('');
  const [contadorPierdenMateria, setContadorPierdenMateria] = useState(0);
  const [notaFinal, setNotaFinal] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const calcularNotaFinal = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    const n4 = parseFloat(nota4);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || n1 < 0 || n1 > 5 || n2 < 0 || n2 > 5 || n3 < 0 || n3 > 5 || n4 < 0 || n4 > 5) {
      Alert.alert('Error', 'Las notas deben estar en el rango de 0 a 5');
      return;
    }

    const notaFinalCalculada = (n1 * 0.25) + (n2 * 0.25) + (n3 * 0.25) + (n4 * 0.25);
    setNotaFinal(notaFinalCalculada);

    if (notaFinalCalculada < 3.0) {
      setContadorPierdenMateria(contadorPierdenMateria + 1);
    }
  };

  return (
      <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
    <View style={styles.container}>
      <Text marginBottom={20}>Ingrese las notas del estudiante (0-5):</Text>
      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        keyboardType="numeric"
        value={nota1}
        onChangeText={text => setNota1(text)}
        />
      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        keyboardType="numeric"
        value={nota2}
        onChangeText={text => setNota2(text)}
        />
      <TextInput
        style={styles.input}
        placeholder="Nota 3"
        keyboardType="numeric"
        value={nota3}
        onChangeText={text => setNota3(text)}
        />
      <TextInput
        style={styles.input}
        placeholder="Nota 4"
        keyboardType="numeric"
        value={nota4}
        onChangeText={text => setNota4(text)}
        />
        <View style={styles.container_button} >
          {/* <Button color="#2e8b57" title="Ocultar Teclado" style={styles.button} onPress={dismissKeyboard}/> */}
          <Button title="Calcular Nota" onPress={calcularNotaFinal} />
        </View>

      <Text  style={styles.resultado}>Nota final: {notaFinal}</Text>
      <Text style={styles.perdieron} >Estudiantes que pierden la materia: {contadorPierdenMateria}</Text>
    </View>
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginTop: -250
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  resultado: {
    marginTop: 20,
    color:"#228b22",
  },
  perdieron: {
    color:"#ff4500",
  },
  container_button: {
    display: "flex",
    flexDirection: "row"
  }
});

