// CarbonTracker.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarbonTracker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carbon Tracker</Text>
      {/* Add your carbon tracker content here */}
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

export default CarbonTracker;
