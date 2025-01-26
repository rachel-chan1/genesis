// Checkout.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout Page</Text>
      <Text style={styles.body}>Here, you can proceed to the payment process.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Checkout;
