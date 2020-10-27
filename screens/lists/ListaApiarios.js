import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ListApiarios() {
    return (
      <View style={styles.container}>
          
        <Text>LISTA DE APIÁRIOS</Text>
          
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
});
