// Checkout.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '@/shared/header';

const Checkout = () => {

  const [checkoutData, setCheckoutData] = useState([
      { id: '1', name: 'Vintage Sneakers', price: '$45', image: require('@/assets/images/home/clothing1.jpg') },
      { id: '2', name: 'Navy Star T-Shirt', price: '$10', image: require('@/assets/images/home/clothing5.jpg') },
      { id: '3', name: 'Cat T-Shirt', price: '$20', image: require('@/assets/images/home/clothing3.jpg') },
    ]);

  const calculateTotal = () => {
    return checkoutData.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  const calculateTax = (subtotal) => {
    return (subtotal * 0.10).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.header}>Order Summary</Text>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <View style={styles.line} />
        {checkoutData.map((item, index) => (
          <View key={item.id}>
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
            {index === checkoutData.length - 1 && <View style={styles.line} />}
          </View>
        ))}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Subtotal:</Text>
          <Text style={[styles.totalText, styles.priceTotal]}>${calculateTotal()}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Shipping:</Text>
          <Text style={[styles.totalText, styles.priceTotal]}>$5.00</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Tax:</Text>
          <Text style={[styles.totalText, styles.priceTotal]}>${calculateTax(parseFloat(calculateTotal()))}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalBoldText}>Total:</Text>
          <Text style={[styles.totalBoldText, styles.priceTotal]}>${(parseFloat(calculateTotal()) + 5 + parseFloat(calculateTax(parseFloat(calculateTotal())))).toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => alert(`Payment Processed! \n You earned ${checkoutData.length * 5} points for ${checkoutData.length * 5} items :)`)}
        >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 6,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  line: {
    height: 1,
    width: '70%',
    backgroundColor: 'gray',
    marginVertical: 10,
    alignSelf: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  itemImage: {
    width: 90,
    height: 90,
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 16,
    marginRight: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 50,
  },
  totalBoldText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 10,
  },
  priceTotal: {
    marginRight: 50,
  },
  payButton: {
    backgroundColor: '#24430F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 50,
    borderRadius: 30,
  },
  payButtonText: {
    color: 'white',
    fontSize: 25,
  },
});

export default Checkout;
