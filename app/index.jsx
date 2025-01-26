import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import Header from '../shared/header'; // Ensure Header is valid and imported

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
     
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Optional background for visibility
  },
  text: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 10,
    borderRadius: 8,
  },
  searchBar: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 10, // Space between text and search bar
    paddingLeft: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 3, // For Android shadow effect
    alignSelf: 'center', // Center the search bar
  },
});
