import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import ExternalApi from './external/Api.js';
import Cache from './external/Cache.js';

export default function CadastroUsuario(props) {
  const Api = new ExternalApi();
  const cache = new Cache();

  function returnToLogin(response) {
    cache.set('userId', response.data.dados.id)
    props.navigation.navigate("Login")
  }

  const register = () => {
    Api.createUser(
      document.querySelector('[placeholder="Nome Completo"]').value,
      document.querySelector('[placeholder="CPF"]').value
    ).then(
      returnToLogin,
      ()=>{
        console.log("Não foi possivel efetuar o registro")
      }
    )
  }

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

        <TouchableOpacity style={styles.loginBtn} onPress={register}>
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
