import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import ExternalApi from './external/Api.js';

export default function Login(props) {
    const Api = new ExternalApi();

    function goToCadastroUsuario() {
        props.navigation.navigate("Cadastro de Usuário")
    }

    function goToListaDeApiarios() {
      props.navigation.navigate("Lista de Apiários")
    }

    const loggin = () => {
      Api.authenticateUser(
        document.querySelector('[placeholder="Usuário"]').value,
        document.querySelector('[placeholder="Senha"]').value
      ).then(
        goToListaDeApiarios,
        ()=>{
          console.log("Arrumar mensagem de Não foi possivel efetuar o login")
        }
      )
    }

    return (
      <View style={styles.container}>
        
        <Text style={styles.logo}>APIÁRIOS</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Usuário" 
            placeholderTextColor="#B4B4B4"
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Senha" 
            placeholderTextColor="#B4B4B4"
            />
        </View>

        {/* <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a Senha?</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.loginBtn} onPress={loggin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToCadastroUsuario}>
          <Text style={styles.loginText}>Cadastrar</Text>
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
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#F5B041",
    marginBottom:40
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
  forgot:{
    color:"white",
    fontSize:11
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
