import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function CadastroUsuario() {
    return (
      <View style={styles.container}>
          
          <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Nome Completo" 
            placeholderTextColor="#B4B4B4"
            maxLength = {100}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="CPF" 
            placeholderTextColor="#B4B4B4"
            maxLength = {11}
            />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>CADASTRAR</Text>
        </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText:{
    height:50,
    color:"white"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#1B2631",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#F5B041",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
