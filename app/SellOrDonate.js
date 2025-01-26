import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '@/shared/header';
import { useNavigation } from '@react-navigation/native';  // Import the navigation hook

const SellOrDonate = () => {
  const navigation = useNavigation();  // Initialize navigation hook

  // Function to navigate to Sell page
  const navigateToSell = () => {
    navigation.navigate('Sell');  // 'Sell' is the screen name you define
  };

  // Function to navigate to Donate page
  const navigateToDonate = () => {
    navigation.navigate('Donate');  // 'Donate' is the screen name you define
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.imageWrapper} onPress={navigateToSell}>
          <Image
            source={require('@/assets/images/sell.png')} // Replace with your image path
            style={styles.image}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.imageHeader}>Sell</Text>
            <Text style={styles.imageText}>Make Space, Make Money!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageWrapper} onPress={navigateToDonate}>
          <Image
            source={require('@/assets/images/donate.png')} // Replace with your image path
            style={styles.image}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.imageHeader}>Donate</Text>
            <Text style={styles.imageText}>A Small Gesture, A Big Impact</Text>
          </View>
        </TouchableOpacity>
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
    marginBottom: 10, // Reduced the space between the two images
  },
  image: {
    width: 400, // Keep the width the same
    height: 370, // Increased height to make the images taller
    
    borderRadius: 30, // Added rounded corners
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
