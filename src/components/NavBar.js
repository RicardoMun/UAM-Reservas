import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Constants from 'expo-constants'

export const NavBar = () => {
    return (
        <View style={styles.navbar}>

            <Image
                source={require('../assets/img/png/logo-uam.png')}
                style={styles.logoImg}
            />
            <Text style={styles.navTextTitle}>Aulas UAM {'\u00A9'}</Text>

        </View>

    )
}

const styles = StyleSheet.create({

    navbar: {
        /* Constantes que ofrece expo para el tamaño de la barra de 
        navegación según el dispositivo */
        padding: 25,
        height: 100,
        width: '100%',
        backgroundColor: '#0069A3',
        display: 'flex',
        flexDirection: 'row',
    },
    logoImg: {
        width: 100,
        height: 60,
        marginLeft: 10,
        marginTop: 5,
        resizeMode: 'contain'
    },
    navTextTitle: {
        display: 'flex',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 22,
        paddingLeft: 20,

    }
})
