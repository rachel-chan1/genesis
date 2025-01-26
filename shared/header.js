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
        toggleOverlay();
        // You can add any navigation or action here, e.g., navigating to a profile page
      };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={toggleOverlay}>
        <MaterialIcons name="menu" size={30} color="#333" style={styles.menuIcon} />
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Image source={require('../assets/images/yes.png')} style={styles.image} />
        <Text style={styles.headerText}>Genesis</Text>
      </View>
      <TouchableOpacity onPress={handleProfilePress}>
        <MaterialIcons name="account-circle" size={30} color="#333" style={styles.profileIcon} />
      </TouchableOpacity>    
      {isOverlayVisible && (
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Bookmarks</Text>
            <Text style={styles.menuText}>Carbon Tracker</Text>
            <Text style={styles.menuText}>Sell or Donate</Text>
            <TouchableOpacity onPress={toggleOverlay} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    top: 0,
    width: '100%',
    height: 60, // Fixed height for the header
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20, // Add padding for left and right
    backgroundColor: '#f8f8f8', // Optional background color
    borderBottomWidth: 1, // Optional border
    borderBottomColor: '#ddd',
    zIndex: 5,
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
  menuIcon: {
    marginLeft: 10,
  },
  profileIcon: {
    marginRight: 10,
  },
  overlay: {
    width: '115%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  menu: {
    width: '100%',
    padding: 20,
    backgroundColor: '#A8B69F',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'green',
  },
});
