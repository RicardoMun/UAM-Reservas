import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native'
import { NavBar } from '../components/NavBar'
import { MenuBar } from '../components/MenuBar'
import { Ionicons } from 'react-native-vector-icons'
import { Booking } from './Booking'
import { StatusBar } from 'expo-status-bar';
import { Statistics } from './Statistics'

export const Home = ({
    modalHome,
    setModalHome,
}) => {

    const [modalReserva, setModalReserva] = useState(false);
    const [modalEstadisticas, setModalEstadisticas] = useState(false);

    return (
        <SafeAreaView>
            {/* <StatusBar style="auto" /> */}
            <Modal  animationType="fade" visible={modalHome}>
                <ScrollView>
                    <NavBar />

                    <View>
                        <Text style={styles.title}>Bienvenido</Text>
                    </View>

                    <View style={styles.container}>

                        <View style={styles.horizontalButtons}>
                            
                            <TouchableOpacity onPress={() => {setModalReserva(true)}} style={styles.button} >
                                <Text style={styles.buttonText}>Reservar {" "}<Ionicons style={styles.IconStyle} name="calendar-outline"></Ionicons></Text>
                            </TouchableOpacity>
                            
                            <Booking 
                                    modalReserva={modalReserva}
                                    setModalReserva={setModalReserva}
                            ></Booking>
                            
                            <TouchableOpacity onPress={() => {setModalEstadisticas(true)}} style={styles.button}>
                                <Text style={styles.buttonText}>Estadísticas {" "}<Ionicons style={styles.IconStyle} name="stats-chart-outline"></Ionicons></Text>
                            </TouchableOpacity>

                            <Statistics
                                modalEstadisticas={modalEstadisticas}
                                setModalEstadisticas={setModalEstadisticas}
                            ></Statistics>

                        </View>

                        <TouchableOpacity style={styles.verticalButtons}>
                            <Text style={styles.buttonText}>Ver Mis Reservas {" "}<Ionicons style={styles.IconStyle} name="grid-outline"></Ionicons></Text>
                        </TouchableOpacity>

                    </View>
                    {/* Llamamos el componente con la barra de menú */}
                    
                </ScrollView>
                <MenuBar />
              </Modal>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
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
    verticalButtons: {
        backgroundColor: '#0069A3',
        borderRadius: 10,
        margin: 35,
        padding: 14,
        width: 355,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
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
    IconStyle: {
        fontSize: 24,
        color: '#fff',
        alignContent: 'space-around',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#575757',
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 50,
    },
})
