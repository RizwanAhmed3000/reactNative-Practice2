import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const Splash = ({navigation}) => {

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            navigation.navigate('Onboarding')
        }, 1000)

        return ()=> clearTimeout(timeOut)
    },[navigation])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tour Place</Text>
            <Text style={styles.subHeading}>Explore the world</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: "900",
        fontSize: 35,
        color: "white"
    },
    subHeading: {
        fontWeight: "300",
        fontSize: 16,
        color: "white"
    }
});

export default Splash