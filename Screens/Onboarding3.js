import { View, Text, StyleSheet, TextInput, Button, ImageBackground, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

const Onboarding3 = ({navigation}) => {

    function skipHandler(){
        navigation.navigate('SignUp')
    }

    function nextHandler(){
        navigation.navigate('SignUp')
    }


    return (
        <View style={styles.container}>
            <Image source={require('../assets/abroad-pana.png')} style={{ width: 300, height: 300 }} />
            <Text style={styles.heading}>Tour place</Text>
            <View style={styles.para}>
                <Text style={styles.textLo}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
            <Pressable style={styles.skipButton} onPress={skipHandler}>
                <Text style={styles.text}>Skip</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={nextHandler}>
                <Text style={styles.text}>Next</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        position: "relative"
    },
    inputField: {
        marginVertical: 10,
        borderWidth: 1,
        width: "50%",
        padding: 5,
        borderRadius: 5,
    },
    btn: {
        width: "50%",
        marginTop: 10,
        borderRadius: 5,
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
    para: {
        paddingHorizontal: 30,
        marginTop: 15
    },
    textLo: {
        color: "black"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginVertical: 15,
        backgroundColor: 'orange',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    skipButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginVertical: 15,
        backgroundColor: 'orange',
        position: "absolute",
        right: 0
    }
});

export default Onboarding3