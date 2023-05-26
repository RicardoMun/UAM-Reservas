import React from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { NavBar } from '../components/NavBar'
import { MenuBar } from '../components/MenuBar'
import { Ionicons } from 'react-native-vector-icons'
import { StatusBar } from 'expo-status-bar';


export const Booking = ({
    modalReserva, 
    setModalReserva
}) => {
  return (

    <ScrollView>
        <StatusBar style="auto" />
        <Modal  animationType="slide" visible={modalReserva}>
            <NavBar />
                
                <View style={styles.infoNav}>   
                    <TouchableOpacity style={styles.button}  onPress={() => {setModalReserva(!modalReserva)}} >
                        <Ionicons style={styles.IconStyle} name="arrow-back-circle-outline"></Ionicons>
                    </TouchableOpacity>
                
                    <Text style={styles.textInfo}> Disponibilidad de Aulas </Text>
                    <Text style={styles.textInfo}>{" "}</Text>
                </View>
                

                <Text style={styles.available}>Disponile</Text>
                <Text style={styles.Occupied}>Ocupado</Text>
                <Text style={styles.OutOfService}>Fuera de Servcio</Text>
               
                <Text style={styles.text}>En esta sección se mostrarán las aulas disponibles para reservar</Text>
            
                {/* grupos de botones para ir al form de reservas */}
                <View style={styles.container}>
                    <View style={styles.horizontalButtons}>
                        <TouchableOpacity style={styles.buttonRoom} onPress={() => {setModalReserva(!modalReserva)}} >
                            <Text style={styles.buttonText}>Aula 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRoom} onPress={() => {setModalReserva(!modalReserva)}} >
                            <Text style={styles.buttonText}>Aula 2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.horizontalButtons}>
                        <TouchableOpacity style={styles.buttonRoom} onPress={() => {setModalReserva(!modalReserva)}} >
                            <Text style={styles.buttonText}>Aula 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRoom} onPress={() => {setModalReserva(!modalReserva)}} >
                            <Text style={styles.buttonText}>Aula 5</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.horizontalButtons}>
                        <TouchableOpacity style={styles.buttonRoom} onPress={() => {setModalReserva(!modalReserva)}} >
                            <Text style={styles.buttonText}>Aula 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRoom} onPress={() => {setModalReserva(!modalReserva)}} >
                            <Text style={styles.buttonText}>Aula 5</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            <MenuBar />
        </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    textInfo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
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

