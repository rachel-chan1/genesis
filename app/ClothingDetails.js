import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing the icon library

const { height: screenHeight } = Dimensions.get('window');

const ClothingDetails = () => {
  const [isBookmarked, setIsBookmarked] = useState(false); // State to track bookmark status

  const handleBookmarkPress = () => {
    setIsBookmarked((prevState) => !prevState); // Toggle the bookmark state
  };

  const handleAddToCart = () => {
    // Logic to add item to cart
    alert("Added to cart!");
  };

  return (
    <ScrollView style={styles.container}> {/* Make the entire content scrollable */}
      <Image
        source={require('@/assets/images/home/clothing6.png')} // Replace with your image path
        style={styles.image}
      />
      <Text style={styles.headerText}>Black Hoodie</Text>
      <Text style={styles.priceText}>$20.00</Text>
      <Text style={styles.descriptionText}>
        This is a stylish black hoodie, perfect for all occasions. Made from high-quality fabric, it offers both comfort and durability. Wear it casually or as part of your everyday wardrobe.
      </Text>

      {/* Bookmark and Add to Cart section */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.bookmarkIconContainer} 
          onPress={handleBookmarkPress}
        >
          <Ionicons 
            name={isBookmarked ? "bookmark" : "bookmark-outline"} 
            size={40}  // Increase size of the bookmark icon
            color={isBookmarked ? "#f9ddd8" : "#333"} // Pink if bookmarked, else dark grey
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={30} color="#fff" /> {/* Bigger shopping cart icon */}
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Add extra space for scrolling */}
      <View style={styles.extraSpace}></View> {/* This will add some additional space */}
    </ScrollView>
  );
};

export default ClothingDetails;

export const screenOptions = {
  headerShown: false, // Remove the default header
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color for the rest of the screen
  },
  image: {
    width: '100%',
    height: screenHeight * (2 / 3), // Covers top 2/3 of the screen
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'regular',
    fontFamily: 'Kaisei-Mermaid', // Custom font
    color: '#333', // Dark text color
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20, // Space between image and text
  },
  priceText: {
    fontSize: 18, // Smaller font size for price
    fontWeight: 'bold',
    color: '#36522A', // Green color for price
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 20, // Same left margin as the product name
  },
  descriptionText: {
    fontSize: 16, // Slightly smaller font for the description
    fontWeight: '400', // Regular weight for the description
    color: '#666', // Lighter color for description text
    textAlign: 'left',
    marginTop: 15,
    marginLeft: 20, // Align with header and price text
    marginRight: 20, // Padding to avoid text touching edges
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,  // Space before action section
    marginLeft: 20, // Left margin to match other text elements
    marginRight: 20, // Space for right padding
    justifyContent: 'space-between', // Spacing between elements
  },
  bookmarkIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#36522A', // Green background color for the button
    paddingVertical: 15, // Increase padding to make button larger
    paddingHorizontal: 20, // More horizontal padding
    borderRadius: 30,
  },
  addToCartText: {
    color: '#fff',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    fontSize: 18,  // Increase font size of the button text
    fontWeight: 'bold',
  },
  extraSpace: {
    height: 100,  // Adjust the height to your preference for more or less space
  }
});
