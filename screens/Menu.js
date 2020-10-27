import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

export default function Menu() {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>
                <View style={styles.insideButton}>
                    <Image
                        style={styles.image}
                        source={require('../assets/menu/bee-hive.png')}>
                    </Image>
                    <Text style={styles.textButton}>APIÁRIOS</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <View style={styles.insideButton}>
                    <Image
                        style={styles.image}
                        source={require('../assets/menu/wooden-box.png')}>
                    </Image>
                    <Text style={styles.textButton}>CAIXAS</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 5,
        height: 100,
        width: 200,
        margin: 25,
        backgroundColor: '#F5B041',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textButton: {
        fontWeight: "bold",
        color: '#404040'
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 20
    },
    insideButton: {
        flex: 1, flexDirection: 'row',
        alignItems: 'center'
    }
});
