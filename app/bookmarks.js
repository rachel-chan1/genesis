// Bookmarks.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Header from '@/shared/header';  // Import the shared header
import MarkedFeed from '@/components/markedFeed';  // Import the Feed component

const Bookmarks = () => {
    return (
        <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            />
            <Text style={styles.header}>Bookmarks</Text>
            <MarkedFeed />
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    searchBar: {
        width: '80%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        paddingLeft: 15,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 3,
        alignSelf: 'center',
      },
      header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
        marginLeft: 16,
        fontWeight: '600',
        alignSelf: 'flex-start',
    },
});

export default Bookmarks;
