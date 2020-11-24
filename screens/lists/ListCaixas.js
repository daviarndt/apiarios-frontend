import React, { lazy, Suspense } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, SectionList, Image } from 'react-native';
import ExternalApi from '../external/Api.js';
import Trash from '../../assets/menu/exclude.png'
import Apiario from '../../assets/menu/apiario.png'

export default function ListCaixas(props) {
  const Api = new ExternalApi();
  const caixa = [];

  function excluirCaixa(id) {
    Api.ocultarCaixaPorId(id).then(
      console.log('Excluido com sucesso'),
      console.log('Erro ao excluir')
    )
  }

  function redirectFullCadCaixa(id) {
      Api.buscarPorApiarioId(id).then(
        (response) => {
          props.navigation.navigate("Nova Caixa", response.data.dados)
        },
        console.log('Deu Ruim')
      )
  }

  function redirectCadCaixa(id) {
    props.navigation.navigate("Nova Caixa", id)
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <View style={styles.cardHeader}>
        <View></View>
        <View style={styles.cardName}>
          <Text name="apiario-name" style={styles.nameText}>Nº Registro: #{title[3]}</Text>
        </View>
        <View style={styles.cardExclude}>
        <TouchableOpacity style={styles.mainBtn} onPress={() => excluirCaixa(title[0])}>
          <Image
            source={Trash}
            style={styles.cardIcons}
            alt="Excluir"
            
          />
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.center}>
        <Text name="apiario-endereco" style={styles.centerText}>Modelo: {title[2]}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.mainTitleView}>
        <Text style={styles.mainTitle}> Caixas </Text>
        <TouchableOpacity onPress={redirectCadCaixa} style={styles.mainBtn}>
          <Text style={styles.mainTextBtn}>Nova Caixa +</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView>
        <SectionList
          sections={props.route.params}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <View />
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  mainTitleView: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'center',
    textAlign: 'center',
  },
  mainTitle: {
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainBtn: {
    marginTop: 5,
    padding: 5,
  },
  mainTextBtn: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addApiario: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    width: '405px',
    marginVertical: 8,
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },


  cardHeader: {
    display: 'grid',
    textAlign: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  cardName: {
    justifyContent: 'center',
    float: 'right',
    marginLeft: '10%',
  },
  nameText: {
    fontSize: 16,
    fontFamily: 'Armata',
  },
  cardExclude: {
    justifyContent: 'center',
    marginLeft: '55%',
  },
  cardEdit: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  cardIcons: {
    width: 50,
    height: 50,
  },


  center: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    textAlign: 'center',
  },
  centerText: {
    fontSize: 16,
    fontFamily: 'Armata',
  },


  footer: {
    display: 'grid',
    textAlign: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  cardCity: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  cityText: {
    fontSize: 14,
    fontFamily: 'Armata',
  },
  cardCord: {
    flexDirection: 'column',
  },
  cord: {
    fontSize: 12,
    fontFamily: 'Armata',
  },
  cardLat: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardLong: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});
