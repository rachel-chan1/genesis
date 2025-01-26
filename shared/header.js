import { View, Text, StyleSheet, Image , TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    const handleProfilePress = () => {
        console.log("Profile button pressed!");
        // You can add any navigation or action here, e.g., navigating to a profile page
      };
  return (
    
    <View style={styles.header}>
      <MaterialIcons name="menu" size={30} color="#333" style={styles.icon} />
      <View style={styles.textContainer}>
        <Image source={require('../assets/images/yes.png')} style={styles.image} />
        <Text style={styles.headerText}>Genesis</Text>
      </View>
      <TouchableOpacity onPress={handleProfilePress}>
        <MaterialIcons name="account-circle" size={30} color="#333" style={styles.profileIcon} />
      </TouchableOpacity>    </View>
    
    
  );
}

const styles = StyleSheet.create({
  header: {
    top: 0,
    width: '100%',
    height: 60, // Fixed height for the header
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20, // Add padding for left and right
    backgroundColor: '#f8f8f8', // Optional background color
    borderBottomWidth: 1, // Optional border
    borderBottomColor: '#ddd',
    zIndex: 10, // Optional border color
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align the image and text horizontally
    justifyContent: 'center', // Center the image and text as a group
    flex: 1, // Allow this container to take up available space and center its content
  },
  headerText: {
    fontWeight: 'light',
    fontSize: 32,
    color: '#333',
    letterSpacing: 1,
    marginLeft: -15, // Space between the image and text
    fontFamily: 'KaiseiOpti',
  },
  icon: {
    marginRight: 0.06, // Add space between the icon and text group
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: -15, // Move the image slightly left
    marginTop: 10,
  },
  
});
