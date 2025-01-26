// SellOrDonate.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SellOrDonate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sell or Donate</Text>
      {/* Add your content for selling or donating items here */}
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
  },
});

export default SellOrDonate;
