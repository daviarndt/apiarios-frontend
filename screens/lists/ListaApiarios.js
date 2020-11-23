import React, { lazy, Suspense } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, SectionList, Image } from 'react-native';
import ExternalApi from '../external/Api.js';
import Trash from '../../assets/menu/exclude.png'
import Apiario from '../../assets/menu/apiario.png'
import { withTheme } from 'react-native-elements';

export default function ListApiarios(props) {
  const Api = new ExternalApi();

  function excluirApiario(id) {
    Api.ocultarApiarioPorId(id).then(
      console.log('Excluido com sucesso'),
      console.log('Erro ao excluir')
    )
  }

  function redirectCadApiario(id) {
    if (id == null || id == undefined) {
      props.navigation.navigate("Novo Apiário")
    } else {
      Api.buscarPorApiarioId(id).then(
        (response) => {
          props.navigation.navigate("Novo Apiário", response.data.dados)
        },
        console.log('Deu Ruim')
      )
    }
  }
  function redirectCadCaixa() {
    props.navigation.navigate("Nova Caixa")
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <View style={styles.cardHeader}>
        <View style={styles.cardEdit}>
          <Image
            source={Apiario}
            style={styles.cardIcons}
            alt="Editar"
            onPress={() => redirectCadApiario(title[0])}
          />
        </View>
        <View style={styles.cardName}>
          <Text name="apiario-name">{title[1]}</Text>
        </View>
        <View style={styles.cardExclude}>
          <Image
            source={Trash}
            style={styles.cardIcons}
            alt="Excluir"
            onPress={() => excluirApiario(title[0])}
          />
        </View>
      </View>

      <View style={styles.center}>
        <Text name="apiario-endereco" style={styles.title}>{title[2]}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.cardCity}>
          <Text name="apiario-city" style={styles.title}>{title[5]}</Text>
        </View>
        <View />
        <View style={styles.cardCord}>
          <View style={styles.cardLat}>
            <Text name="apiario-lat" style={styles.cord}>LAT: {title[3]}</Text>
            <Text name="apiario-long" style={styles.cord}>LONG: {title[4]}</Text>
          </View>
          {/* <View style={styles.cardLong}>
          </View> */}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.btnGroup}>
        <View style={styles.btnsForCads}>
          <TouchableOpacity
            style={styles.btnCad}
            onPress={redirectCadCaixa}>
            <Text>Nova Caixa</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnsForCads}>
          <TouchableOpacity
            style={styles.btnCad}
            onPress={redirectCadApiario}>
            <Text>Cadastro de Apiarios</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <Text style={styles.mainTitle}> Apiários </Text>
      <SafeAreaView>
        <SectionList
          sections={props.route.params}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <View />
            // <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
  },
  mainTitle: {
    marginTop: 5,
    marginLeft: 10,
    padding: 5,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'grey',
    padding: 5,
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
  cardExclude: {
    justifyContent: 'center',
    marginLeft: '63%',
  },
  cardEdit: {
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


  footer: {
    display: 'grid',
    textAlign: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  cardCity: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardCord: {
    flexDirection: 'column',
  },
  cord: {
    fontSize: 12,
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
