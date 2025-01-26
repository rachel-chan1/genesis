import { View, Text, StyleSheet, Image , TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };
    const handleProfilePress = () => {
        console.log("Profile button pressed!");
        // You can add any navigation or action here, e.g., navigating to a profile page
      };
  return (
    
    <View style={styles.header}>
    <TouchableOpacity onPress={toggleOverlay}>
      <MaterialIcons name="menu" size={30} color="#333" style={styles.icon} />
      </TouchableOpacity>
    
      <View style={styles.textContainer}>
        <Image source={require('../assets/images/yes.png')} style={styles.image} />
        <Text style={styles.headerText}>Genesis</Text>
      </View>
      <TouchableOpacity onPress={handleProfilePress}>
        <MaterialIcons name="account-circle" size={30} color="#333" style={styles.profileIcon} />
      </TouchableOpacity>    
      {isOverlayVisible && (
        <View style={styles.menu}>
          <Text style={styles.menuText}>Menu Option 1</Text>
          <Text style={styles.menuText}>Menu Option 2</Text>
          <Text style={styles.menuText}>Menu Option 3</Text>
          <TouchableOpacity onPress={toggleOverlay} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close Menu</Text>
          </TouchableOpacity>
        </View>
      )}
      
      </View>
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
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '75%',
    height: '100%',
    backgroundColor: '#0000',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    padding: 20,
    zIndex: 100,
  },
  menuText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#36522A',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
