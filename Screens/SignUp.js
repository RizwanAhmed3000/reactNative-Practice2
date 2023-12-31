import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword, doc, setDoc, db } from '../FirebaseConfig/Config.js';
import Toast from 'react-native-toast-message';

const SignUp = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function signUpHandler() {

        if (email === "" || password === "") {
            Toast.show({
                type: "error",
                text1: "Missing fields"
            })
        } else if (password.length < 8) {
            Toast.show({
                type: "error",
                text1: "Password must be atleast 8 character long"
            })
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)

                    if (user) {
                        await setDoc(doc(db, "Users", user.uid), {
                            FirstName: firstName,
                            LastName: lastName,
                            username: username,
                            Email: email,
                        });
                        navigation.navigate('Login')
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    }

    function navigateTo() {
        navigation.navigate('Login')
    }

    return (
        <ScrollView style={styles.scroolView}>
            <View style={styles.container}>
                <Text style={styles.heading}>Tour place</Text>
                <Text style={styles.subHeading}>Explore the world</Text>
                {/* <StatusBar style="auto" /> */}
                <TextInput placeholder='First Name' style={styles.inputField} onChangeText={setFirstName} />
                <TextInput placeholder='Last Name' style={styles.inputField} onChangeText={setLastName} />
                <TextInput placeholder='username' style={styles.inputField} onChangeText={setUsername} />
                <TextInput placeholder='Email' keyboardType='email-address' style={styles.inputField} onChangeText={setEmail} />
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputField} onChangeText={setPassword} />
                <TouchableOpacity style={styles.btn} onPress={signUpHandler}>
                    <Text style={styles.text}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={navigateTo}>
                    <Text style={styles.text}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <Toast />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scroolView: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
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


export default SignUp