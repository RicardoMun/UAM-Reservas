import React, { useState } from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from 'react-native-vector-icons'
import { StatusBar } from 'expo-status-bar';
import { NavBar } from '../components/NavBar'
import { MenuBar } from '../components/MenuBar'


export const Statistics = ({
    modalEstadisticas,
    setModalEstadisticas
}) => {

    const [modalHome, setModalHome] = useState(false);


    return (
        <ScrollView>
            <Modal animationType='slide' visible={modalEstadisticas} >
                <StatusBar style="auto" />
                <NavBar />
                <View style={styles.infoNav}>

                    <TouchableOpacity style={styles.button} onPress={() => { setModalEstadisticas(!modalEstadisticas) }} >
                        <Ionicons style={styles.IconStyle} name="arrow-back-circle-outline"></Ionicons>
                    </TouchableOpacity>

                    <Text style={styles.buttonText}> Estadísticas De Uso </Text>
                    <Text style={styles.buttonText}>{" "}</Text>
                </View>
                <Image style={styles.logo} source={require('../assets/img/png/statistics.png')} />

                <Text style={styles.text}>En esta sección se mostrarán las estadísticas de
                    uso de las aulas y del software más usado de la Universidad Autónoma de Manizales</Text>
                <MenuBar />
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    infoNav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: '#F4D73B',
        width: '100%',
    },
    button: {
        padding: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    IconStyle: {
        fontSize: 24,
        color: '#000',
        alignContent: 'space-around',
    },
    logo: {
        width: 300,
        height: 300,
        padding: 10,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        padding: 10,
    }
})


