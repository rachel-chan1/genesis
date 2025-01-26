import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '@/shared/header';

const Cart = ({ navigation }) => {
  const [cartData, setCartData] = useState([
    { id: '1', name: 'Vintage Sneakers', price: '$45', image: require('@/assets/images/home/clothing1.jpg') },
    { id: '2', name: 'Navy Star T-Shirt', price: '$10', image: require('@/assets/images/home/clothing5.jpg') },
    { id: '3', name: 'Cat T-Shirt', price: '$20', image: require('@/assets/images/home/clothing3.jpg') },
  ]);

  const handleDelete = (id) => {
    setCartData(cartData.filter(item => item.id !== id));
  };

  const handleCheckoutPress = () => {
    // Handle checkout button press
    console.log("Checkout button pressed!");
  };

  return (
    <View style={styles.container}>
      <Header />
        <View style={styles.innerContainer}>
        <Text style={styles.header}>Your Cart</Text>
        {cartData.map((item) => (
          <View key={item.id} style={styles.greenRectangle}>
            {item.image && <Image source={item.image} style={styles.itemImage} />}
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.trashIcon} onPress={() => handleDelete(item.id)}>
              <Image source={require('@/assets/images/trash.png')} style={styles.buttonImage} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
          <Image source={require('@/assets/images/cart.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 16,
    alignSelf: 'flex-start',
    fontWeight: '500'
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontStyle: 'italic', // Make the font italicized
  },
  greenRectangle: {
    width: '100%',
    height: 117,
    backgroundColor: '#A8B69F',
    marginVertical: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemImage: {
    width: 90,
    height: 95,
    marginRight: 20,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#F9DDD9',
  },
  textContainer: {
    flex: 1,
  },
  trashIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#24430F',
    marginBlock: 30,
    padding: 20,
    borderRadius: 30,
    width: '75%',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
});

export default Cart;
