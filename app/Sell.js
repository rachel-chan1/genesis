import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '@/shared/header';  // Assuming you have a header component

const Sell = () => {
  // State to handle input fields
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    console.log("Item Details:", itemName, itemDescription, itemPrice);
    // Here you can add logic for submitting the data, e.g. API calls or saving locally
  };

  return (
    
    <View style={styles.container}>
      <Header />
      <Text style={styles.header}>Sell an Item</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Description"
          value={itemDescription}
          onChangeText={setItemDescription}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={itemPrice}
          onChangeText={setItemPrice}
          keyboardType="numeric"
        />
      </View>
    <View style={styles.buttonContainer}> {/* Center container */}
    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    marginTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  formContainer: {
    padding: 20,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#5b744b',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '70%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center', // This ensures the button is centered horizontally
    marginTop: 30,
  },
});

export default Sell;
