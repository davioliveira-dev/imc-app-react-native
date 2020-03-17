import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = (altura / 100);
    const imc = peso / (alt * alt);

    if(imc < 18.6) {
      alert("Você está abaixo do peso! "+imc.toFixed(2));
    }
    else if (imc >= 18.6 && imc <= 24.9) {
      alert("Você está no peso ideal, parabéns! "+imc.toFixed(2));
    }
    else if (imc >= 25 && imc <= 29.9) {
      alert("Você está com sobrepeso! "+imc.toFixed(2));
    }
    else if (imc >= 30 && imc <= 34.9) {
      alert("Você está um pouco acima do peso! Obesidade grau 1! "+imc.toFixed(2));
    }
    else if (imc >= 35 && imc <= 39.9) {
      alert("Você está acima do peso! Obesidade grau 2! "+imc.toFixed(2));
    }
    else if (imc >= 40) {
      alert("Você está acima do peso! Obesidade grau 3! "+imc.toFixed(2));
    }
    else {
      alert("Valor não reconhecido, tente novamente!")
    }


  }

  return(

    <View style={styles.container}>

      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput 
      style = {styles.input}
      value = {peso}
      onChangeText = { (peso) => setPeso(peso) }
      placeholder = "Peso em Kg!"
      keyboardType = "numeric"
    />

    <TextInput 
      style = {styles.input}
      value = {altura}
      onChangeText = { (altura) => setAltura(altura) }
      placeholder = "Altura em centímetros!"
      keyboardType = "numeric"
    />

    <TouchableOpacity style = {styles.button} onPress ={ handleSubmit } >
      <Text style= { styles.buttonText } > Calcular </Text>
    </TouchableOpacity>





    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1
  },

  title: {
    textAlign:"center",
    marginTop: 250,
    fontSize: 30
  },

  input: {
    backgroundColor: "#121212",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: "white",
    fontSize: 22

  },
  
  button: {
    width: 150,
    alignSelf:"center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    backgroundColor: "#17569b",
    padding: 10,
    borderRadius: 25
  },

  buttonText: {
    color: "white",
    fontSize: 25
  }

});
