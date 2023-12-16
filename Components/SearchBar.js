import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React from 'react'

const SearchBar = () => {
    return (
        <View style={{backgroundColor: "pink", display: "flex", flexDirection: "row", width: "auto"}}>
            <TextInput
                style={styles.input}
                placeholder="Search"
            />
            <Ionicons name='time' size={20} style={{ marginRight: 6 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
})

export default SearchBar