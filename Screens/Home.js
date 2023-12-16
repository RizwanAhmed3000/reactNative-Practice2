import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import SearchBar from '../Components/SearchBar';
// import { NavigationContainer } from '@react-navigation/native';


const Home = () => {
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.container}>
                <SearchBar />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeView: {
        backgroundColor: "#eee",
        paddingTop: 20,
    },
    container: {
        // flex: 1,
        paddingVertical: 10,
        backgroundColor: "white"
    }
})

export default Home