import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { auth, signInWithEmailAndPassword } from '../FirebaseConfig/Config.js';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function loginHandler() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tour place</Text>
            <Text style={styles.subHeading}>Explore the world</Text>
            {/* <StatusBar style="auto" /> */}
            <TextInput placeholder='Email' keyboardType='email-address' style={styles.inputField} onChangeText={setEmail} />
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputField} onChangeText={setPassword} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>
                    Log in
                </Text>
            </TouchableOpacity>
            {/* <Button title='Log in' style={styles.btn} onPress={navigateTo} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        marginVertical: 10,
        borderWidth: 1,
        width: "80%",
        padding: 5,
        borderRadius: 5,
    },
    btn: {
        width: "80%",
        marginTop: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "orange",
        padding: 10,
        display: "flex",
        alignItems: "center",
    },
    heading: {
        fontWeight: "900",
        fontSize: 35,
        color: "orange"
    },
    subHeading: {
        fontWeight: "300",
        fontSize: 16,
        color: "orange"
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Login