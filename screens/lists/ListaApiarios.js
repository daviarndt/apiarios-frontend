import React, { lazy, Suspense } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, SectionList, Image } from 'react-native';
import ExternalApi from '../external/Api.js';
import Trash from '../../assets/menu/exclude.png'
import Apiario from '../../assets/menu/apiario.png'

export default function ListApiarios(props) {
  const Api = new ExternalApi();
  const caixa = [];

  function excluirApiario(id) {
    console.log('hdgjkashdkjash')
    Api.ocultarApiarioPorId(id).then(
      console.log('Excluido com sucesso'),
      console.log('Erro ao excluir')
    )
  }

  function redirectFullCadApiario() {
    Api.buscarPorApiarioId(id).then(
      (response) => {
        props.navigation.navigate("Novo Apiário", response.data.dados)
      },
      console.log('Deu Ruim')
    )
  }

  function redirectCadApiario() {
      props.navigation.navigate("Novo Apiário")
  }

  function redirectListCaixa(id) {
    Api.buscarPorApiarioId(id)
    .then(
      (response) => {
        response.data.dados.forEach((element) => {
          caixa.push({ title: element.modelo, data: [[element.apiarioId, element.id, element.modelo, element.numeroRegistro ]] })
        })
        props.navigation.navigate("Lista de Caixas", caixa)
      },
      props.navigation.navigate("Nova Caixa", id)
    )
  }

  const Item = ({ title }) => (
    <View style={styles.item} onPress={() => redirectListCaixa(title[0])}>
      <View style={styles.cardHeader} onPress={() => redirectListCaixa(title[0])}>
        <View style={styles.cardEdit}>
          {/* <Image
            source={Apiario}
            style={styles.cardIcons}
            alt="Editar"
            onPress={() => redirectFullCadApiario(title[0])}
          /> */}
        </View>
        <View style={styles.cardName} onPress={() => redirectListCaixa(title[0])}>
          <Text name="apiario-name" style={styles.nameText} onPress={() => redirectListCaixa(title[0])}>{title[1]}</Text>
        </View>
        <View style={styles.cardExclude}>
        <TouchableOpacity onPress={() => excluirApiario(title[0])}>
          <Image
            source={Trash}
            style={styles.cardIcons}
            alt="Excluir"
            onPress={() => excluirApiario(title[0])}
          />
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.center} onPress={() => redirectListCaixa(title[0])}>
        <Text name="apiario-endereco" style={styles.centerText} onPress={() => redirectListCaixa(title[0])}>{title[2]}</Text>
      </View>

      <View style={styles.footer} onPress={() => redirectListCaixa(title[0])}>
        <View style={styles.cardCity} onPress={() => redirectListCaixa(title[0])}>
          <Text name="apiario-city" style={styles.cityText} onPress={() => redirectListCaixa(title[0])}>{title[5]}</Text>
        </View>
        <View />
        <View style={styles.cardCord} onPress={() => redirectListCaixa(title[0])}>
          <View style={styles.cardLat} onPress={() => redirectListCaixa(title[0])}>
            <Text name="apiario-lat" style={styles.cord} onPress={() => redirectListCaixa(title[0])}>LAT: {title[3]}</Text>
            <Text name="apiario-long" style={styles.cord} onPress={() => redirectListCaixa(title[0])}>LONG: {title[4]}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.mainTitleView}>
        <Text style={styles.mainTitle}> Apiários </Text>
        <TouchableOpacity onPress={redirectCadApiario} style={styles.mainBtn}>
          <Text style={styles.mainTextBtn}> Novo Apiário +</Text>
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
