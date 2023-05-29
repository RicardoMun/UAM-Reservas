import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import { Ionicons } from 'react-native-vector-icons';
import { Settings } from '../screens/Settings';


export const MenuBar = () => {

    const [modalConfiguracion, setModalConfiguracion] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StatusBar backgroundColor="#0069A3" />

                <View style={styles.menuBar}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons style={styles.iconStyle} name="person-outline" />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => {setModalConfiguracion(true)}}
                        style={styles.iconButton}
                    >
                        <Ionicons style={styles.iconStyle} name="cog" />
                    </TouchableOpacity>
                    
                    <Settings
                        modalConfiguracion={modalConfiguracion}
                        setModalConfiguracion={setModalConfiguracion}
                    ></Settings>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        marginTop: 70,
        
    },
    content: {
        flex: 1,
        zIndex: 1,
    },
    menuBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 70,
        backgroundColor: '#0069A3',
    },
    iconButton: {
        padding: 12,
    },
    iconStyle: {
        fontSize: 24,
        color: '#fff',
    },
});
/* const styles = StyleSheet.create({
    menuBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 70,
        backgroundColor: '#0069A3',
        width: '100%',
    },
    iconButton: {
        padding: 8,
    },
    iconStyle: {
        fontSize: 30,
        color: '#fff',
        alignContent: 'space-around',

    },
    title: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    }

}); */