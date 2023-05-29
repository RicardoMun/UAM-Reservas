import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { NavBar } from '../components/NavBar';
import { MenuBar } from '../components/MenuBar';

export const Settings = ({
    modalConfiguracion,
    setModalConfiguracion,
}) => {


    const handleLogOut = () => {
        Alert.alert("Cerrar Sesión", "¿Está seguro que desea cerrar sesión?", [
            {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", }
        ]);
    };


    return (
        <Modal animationType="fade" visible={modalConfiguracion}>
            <NavBar />
            <View style={styles.infoNav}>
                <TouchableOpacity style={styles.button} onPress={() => { setModalConfiguracion(!modalConfiguracion) }} >
                    <Ionicons style={styles.IconStyle} name="arrow-back-circle-outline"></Ionicons>
                </TouchableOpacity>

                <Text style={styles.textInfo}> Cerrar Sesión </Text>
                <Text style={styles.textInfo}>{" "}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    handleLogOut();
                }}
                style={styles.logOut}
            >

                <Text style={styles.logOutText}>Cerrar Sesión</Text>

            </TouchableOpacity>
            <MenuBar />
        </Modal>


    )
}

const styles = StyleSheet.create({
    textInfo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    logOut: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginTop: 20,
        alignSelf: 'center',
    },
    logOutText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        alignContent: 'center',
    },
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalButtons: {
        flexDirection: 'row',
        marginBottom: 16,
        height: 60,
    },
    buttonRoom: {
        backgroundColor: '#0069A3',
        borderRadius: 8,
        marginHorizontal: 19,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    available: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#298A07',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        /* marginTop: 50,
        marginBottom: 50, */
    },
    Occupied: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF0000',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        /* marginTop: 50,
        marginBottom: 50, */
    },
    OutOfService: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E2AA19',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        /* marginTop: 50,
        marginBottom: 50, */
    },
})
