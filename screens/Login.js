import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import ExternalApi from './external/Api.js';
import Cache from './external/Cache.js';

export default function Login(props) {
  const Api = new ExternalApi();
  const cache = new Cache();
  let cidades = [];
  // { 
  //   title: 'Londrina',
  //   data: [
  //     [
  //       '55',
  //       'Nome De Teste',
  //       'Av Paul Harris, 88',
  //       'lat234,234234324324',
  //       'long250,234234324324'
  //     ]
  //   ],
  //   title: 'Londrina',
  //   data: [
  //     [
  //       '673',
  //       'Anthony Tesche',
  //       'Rua Paraguai, 528',
  //       'latitude',
  //       'longitude'
  //     ]
  //   ]
  // };

    function goToCadastroUsuario() {
        props.navigation.navigate("Cadastro de Usuário")
    }

    function goToListaDeApiarios(response) {
      cache.set('token', response.data.dados.token)
      Api.buscarApiariosPorUsuario(23)
      .then(
        (response) => {
          response.data.dados.forEach((element) => {
            cidades.push({ title: element.cidade, data: [[element.id, element.nome, element.endereco, element.latitude, element.longitude, element.cidade]] })
          })
          cache.set('list', cidades)
          props.navigation.navigate("Lista de Apiários", cidades)
        },
        console.log("Deu Ruim, oq? n Sei tb")
      )
    }

    const loggin = () => {
      Api.authenticateUser(
        document.querySelector('[placeholder="Usuário"]').value,
        document.querySelector('[placeholder="Senha"]').value
      ).then(
        goToListaDeApiarios,
        ()=>{
          console.log("Não foi possivel efetuar o login")
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
            value="84931183034"
            placeholderTextColor="#B4B4B4"
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Senha" 
            value="84931183034"
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
