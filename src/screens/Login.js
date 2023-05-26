import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseConfig } from '../firebase/firebase.config';
import { initializeApp } from 'firebase/app';
import { Ionicons } from 'react-native-vector-icons';
import { NavBar } from '../components/NavBar';
import { StatusBar } from 'expo-status-bar';
import { Home } from './Home';

export const Login = () => {
    /* Variables para inicio de sesión */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const [modalHome, setModalHome] = useState(false);


    /* Función para crear usuario mediante email*/
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Usuario creado");
            })
            .catch((error) => {
                const errorCode = error.code;
                //Verificamos el error que captura
                const errorMessage = error.message;
                //Indicamos el tipo de error
                Alert.alert("Error", "Verifique los campos");
            });
    };

    /* Función para iniciar sesión mediante email*/
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Inició sesión");
                setModalHome(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                //Verificamos el error que captura
                const errorMessage = error.message;
                //Indicamos el tipo de error
                Alert.alert("Error", "Verifique los campos");
            });
    };

    /* Función para iniciar sesión con Google usando auth de firebase */
    const handleSignInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log("Inició sesión con Google", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                Alert.alert("Error", credential);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <NavBar />
            <Text style={styles.logInTitle}>INICIO DE SESIÓN</Text>

            {/* Formulario de inicio de sesión CORREO*/}
            <View>
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput
                    placeholder='ejemplo@autonoma.edu.co'
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            {/* Formulario de inicio de sesión CONTRASEÑA*/}
            <View>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    placeholder='Contraseña'
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            {/* Botón de inicio de sesión haciendo el llamado
          a la función handleSignIn que conecta con firebase 
      */}
            <View style={styles.horizontalButtons}>
                <TouchableOpacity
                    onPress={() => {
                        handleSignIn();
                    }}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Ingresar</Text>
                </TouchableOpacity>

                <Home modalHome={modalHome} setModalHome={setModalHome} />

                <TouchableOpacity
                    /* llamar a la funcion handleSignUP */
                    onPress={handleSignUp}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Registrarse</Text>
                </TouchableOpacity>
            </View>

            {/* Botón de inicio de sesión MEDIANTE GOOGLE usando firebase*/}
            <TouchableOpacity
                /* llamar a la funcion handleGoogle */
                onPress={handleSignInGoogle}
                style={styles.btnLogInGoogle}
            >
                <Text style={styles.btnText}><Ionicons name="logo-google" style={styles.googleLogoStyle} />{"  "}Iniciar con Google</Text>
            </TouchableOpacity>

            <View style={styles.label}>
                <Text style={{ color: '#0069A3' }}>¿No puedes Ingresar?</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logInTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#575757',
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#0069A3',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        marginHorizontal: 8,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLogInGoogle: {
        backgroundColor: '#F4D73B',
        borderRadius: 10,
        padding: 15,
        width: 300,
    },
    googleLogoStyle: {
        fontSize: 30,
        color: '#fff',
        alignContent: 'space-around',
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        alignContent: 'center',
    },
    horizontalButtons: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 20,
        height: 60,
    },
    label: {
        color: '#575757',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 20,
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
        width: 300,
    },
});