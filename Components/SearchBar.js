import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React from 'react'

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.input}
                placeholder="Search"
            />
            <TouchableOpacity>
                <Ionicons name='search' size={20} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: "white", 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center"
    },
    input: {
        height: 40,
        width: "85%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
    },
})

export default SearchBar