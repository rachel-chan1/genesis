// SellOrDonate.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '@/shared/header';

const SellOrDonate = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('@/assets/images/sell.png')} // Replace with your image path
            style={styles.image}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.imageHeader}>Sell</Text>
            <Text style={styles.imageText}>Make Space, Make Money!</Text>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('@/assets/images/donate.png')} // Replace with your image path
            style={styles.image}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.imageHeader}>Donate</Text>
            <Text style={styles.imageText}>A Small Gesture, A Big Impact</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    marginTop: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 400, // Adjust the width as needed
    height: 370, // Adjust the height as needed
    borderRadius: 30,
    //resizeMode: 'contain',
  },
  textWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHeader: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  imageText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default SellOrDonate;
