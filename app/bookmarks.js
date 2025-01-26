// Bookmarks.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bookmarks = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bookmarks</Text>
            {/* Add your content for the bookmarks screen here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    }
});

export default Bookmarks;
