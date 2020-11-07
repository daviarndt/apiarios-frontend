import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SectionList } from 'react-native';
import ExternalApi from '../external/Api.js';
import Cache from './external/Cache.js';

export default function ListApiarios(props) {
  const Api = new ExternalApi();
  const cache = new Cache();
  let cidades = {};

  function populate() {
    if(cache.get('list') == undefined){
      Api.buscarApiariosPorUsuario(6)
        .then(
          (response) => {
            response.data.dados.forEach((element) => {
              if (cidades[element.cidade] != undefined) {
                var position = cidades[element.cidade].length
                cidades[element.cidade][position] = { data: element.name + " - " + element.modelo }
              } else {
                cidades[element.cidade] = { data: element.nome + " - " + element.endereco }
              }
              cache.set('list', cidades)
            })
          },
          console.log('Deu Ruim')
        )
    } else {
      cidades = cache.get('list')
    }
  }

  function redirectCadApiario() {
    props.navigation.navigate("Novo Apiário")
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={redirectCadApiario}>
          <Text>Cadastro de Caixa</Text>
        </TouchableOpacity>
      </View>
      <View>
        <SectionList
          sections={cidades}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
