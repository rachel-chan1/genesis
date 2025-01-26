import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Sample Cart Data (you should replace it with your dynamic data)
const cartData = [
  { id: '1', name: 'Shirt', price: '$20' },
  { id: '2', name: 'Jeans', price: '$40' },
  { id: '3', name: 'Jacket', price: '$60' },
];

const Cart = ({ navigation }) => {

  const handleCheckoutPress = () => {
    // Handle checkout button press
    console.log("Checkout button pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      
      {/* Cart List */}
      <FlatList
        data={cartData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />

      {/* Checkout Button */}
      <TouchableOpacity onPress={handleCheckoutPress} style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    color: '#333',
  },
  itemPrice: {
    fontSize: 18,
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#5b744b',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
