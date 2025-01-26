import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './index'; //  component
import HomeScreen from './index';
import ClothingDetails from './ClothingDetails'; // Details screen component
import Bookmarks from './bookmarks'; // Bookmarks screen
import CarbonTracker from './CarbonTracker'; // Carbon Tracker screen
import SellOrDonate from './SellOrDonate'; // SellOrDonate screen component
import Cart from './Cart';
import Sell from './Sell';
import Donate from './Donate';
import Label from './label';
import Checkout from './Checkout';
import Trending from './Trending';
import LogIn from './LogIn';
import Signup from './Signup';


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClothingDetails" component={ClothingDetails} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        <Stack.Screen name="CarbonTracker" component={CarbonTracker} />
        <Stack.Screen name="SellOrDonate" component={SellOrDonate} />  {/* This is how you should be registering screens */}
        <Stack.Screen name="Cart" component={Cart} /> 
        <Stack.Screen name="Sell" component={Sell} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="Label" component={Label} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Trending" component={Trending} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
