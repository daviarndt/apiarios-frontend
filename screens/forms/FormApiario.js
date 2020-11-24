import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import ExternalApi from './../external/Api.js';

export default function FormApiario(props) {
  const Api = new ExternalApi();
  
  function goToListaDeApiarios() {
    props.navigation.navigate("Lista de Apiários")
  }

  const cadastro = () => {
    Api.createApiario(
      document.querySelector('[placeholder="Cidade"]').value,
      document.querySelector('[placeholder="Endereço"]').value,
      document.querySelector('[placeholder="Latitude"]').value,
      document.querySelector('[placeholder="Longitude"]').value,
      document.querySelector('[placeholder="Nome"]').value
    ).then(
      goToListaDeApiarios,
      ()=>{
        console.log("Não foi possivel criar novo apiario")
      }
    )
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.logo}>Cadastro de Novo Apiário</Text>

        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Nome"
            placeholderTextColor="#B4B4B4"
            maxLength={50}
          />
        </View>
        <View style={styles.inputView} >
        <TextInput
            style={styles.inputText}
            placeholder="Cidade"
            placeholderTextColor="#B4B4B4"
            maxLength={150}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Endereço"
            placeholderTextColor="#B4B4B4"
            maxLength={150}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Latitude"
            placeholderTextColor="#B4B4B4"
            maxLength={30}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Longitude"
            placeholderTextColor="#B4B4B4"
            maxLength={30}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={cadastro}>
          <Text style={styles.loginText}>CADASTRAR</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight+20
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F5B041",
    marginBottom: 40
  },
  inputText: {
    height: 50,
    color: "white"
  },
  inputView: {
    width: "80%",
    backgroundColor: "#1B2631",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#F5B041",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});
