import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Shop: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shop</Text>
      {/* Add your shop content here */}
    </ScrollView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});