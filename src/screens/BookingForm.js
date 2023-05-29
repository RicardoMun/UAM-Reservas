import React, { useState } from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, Platform, ScrollView } from 'react-native'
/* import { ScrollView } from 'react-native-gesture-handler' */
import { NavBar } from '../components/NavBar'
import { MenuBar } from '../components/MenuBar'
import { Ionicons } from 'react-native-vector-icons'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'

import DateTimePicker from '@react-native-community/datetimepicker'
import { SafeAreaView } from 'react-native-safe-area-context'

export const BookingForm = ({
    modalReservaFormulario,
    setModalReservaFormulario
}) => {

    const [date, setDate] = useState(new Date());
    const [dateOfReservation, setDateOfReservation] = useState("");
    const [hourOfReservation, setHourOfReservation] = useState("");
    const [showTimepicker, setShowTimepicker] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [comments, setComments] = useState("");
    const [name, setName] = useState("");


    /* Función para la visibilidad del selector de fecha -> DatePicker */
    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };

    const toggleTimepicker = () => {
        setShowTimepicker(!showTimepicker);
    };


    /* */
    const onChange = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);
            if (Platform.OS === 'android') {
                toggleDatepicker();
                setDateOfReservation(currentDate.toDateString());
            }
        } else {
            toggleDatepicker();
        }
    }

    const onChangeTime = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);
            if (Platform.OS === 'android') {
                toggleTimepicker();
                setHourOfReservation(currentDate.toTimeString());
            }
        } else {
            toggleTimepicker();
        }
    }


    return (
        <SafeAreaView>

            <View style={styles.container}>
                <StatusBar style="auto" />
                <Modal animationType="slide" visible={modalReservaFormulario}>

                    <ScrollView>
                        <NavBar />
                        <View style={styles.infoNav}>
                            <TouchableOpacity style={styles.button} onPress={() => { setModalReservaFormulario(!modalReservaFormulario) }} >
                                <Ionicons style={styles.IconStyle} name="arrow-back-circle-outline"></Ionicons>
                            </TouchableOpacity>

                            <Text style={styles.textInfo}> Formulario de reserva </Text>
                            <Text style={styles.textInfo}>{" "}</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            {/* {'\u2022'} código para añadir viñetas */}
                            {/* La info en n futuro debe ser obtenida mediante base de datos */}
                            <Text style={styles.infoTextPrimary}>Información de esta sala <Ionicons style={styles.IconStyle} name="information-circle-outline"></Ionicons></Text>
                            <Text style={styles.infoText}>{'\u2022'} Visual Studio Code</Text>
                            <Text style={styles.infoText}>{'\u2022'} NetBeans 12</Text>
                            <Text style={styles.infoText}>{'\u2022'} MySQL</Text>
                            <Text style={styles.infoText}>{'\u2022'} MongoDB</Text>
                            <Text style={styles.infoText}>{'\u2022'} NodeJS</Text>
                        </View>

                        {/* Formulario*/}
                        <View>
                            <Text style={styles.label}>Nombre para la reserva</Text>
                            <TextInput
                                placeholder='Pepito Pérez'
                                keyboardType='email-address'
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                        <View styles={styles.campo}>
                            <Text style={styles.label}>¿Necesitas un software en específico?</Text>
                            <TextInput
                                placeholder="(Opcional)"
                                style={styles.input}
                                numberOfLines={6}
                                multiline={true}
                                value={comments}
                                onChangeText={setComments}
                            ></TextInput>
                        </View>

                        {/* Seleccionar Fecha  */}
                        <View>
                            <Text style={styles.label}>Fecha para la reserva</Text>

                            {showPicker && (
                                <DateTimePicker
                                    mode="date"
                                    display='default'
                                    value={date}
                                    onChange={onChange}
                                />
                            )}

                            {!showPicker && (
                                <Pressable
                                    onPress={toggleDatepicker}
                                >
                                    <TextInput
                                        placeholder='MM/DD/AAAA'
                                        style={styles.input}
                                        editable={false}
                                        value={dateOfReservation}
                                        onChangeText={setDateOfReservation}
                                    />
                                </Pressable>
                            )}

                        </View>

                        {/* Seleccionar hora  */}
                        <View>
                            <Text style={styles.label}>Hora de reserva</Text>

                            {showTimepicker && (
                                <DateTimePicker
                                    mode="time"
                                    display='default'
                                    value={date}
                                    onChange={onChangeTime}
                                />
                            )}

                            {!showTimepicker && (
                                <Pressable
                                    onPress={toggleTimepicker}
                                >
                                    <TextInput
                                        placeholder='HH:MM'
                                        style={styles.input}
                                        editable={false}
                                        value={hourOfReservation}
                                        onChangeText={setHourOfReservation}
                                    />
                                </Pressable>
                            )}

                        </View>
                        
                        <TouchableOpacity
                            style={styles.confirmButton}
                        >
                            <Text style={styles.confirmButtonText}>Reservar</Text>
                        </TouchableOpacity>

                    </ScrollView>
                    <MenuBar />
                </Modal>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        marginBottom: 18,
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
        alignSelf: 'center',
    },
    infoContainer: {
        height: 130,
        backgroundColor: '#F2F2F5',
        borderRadius: 10,
        alignSelf: 'center',
        width: '90%',
        padding: 10,
        margin: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#000',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    infoTextPrimary: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    label: {
        color: '#575757',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: -14,
        textAlign: 'left',
        width: 300,
    },
    input: {
        color: '#575757',
        fontSize: 16,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        margin: 20,
        padding: 14,
        paddingTop: 8,
        width: '90%',
        alignSelf: 'center',
    },
    confirmButton: {
        backgroundColor: '#0069A3',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        marginHorizontal: 8,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    confirmButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        alignContent: 'center',
    },

});
