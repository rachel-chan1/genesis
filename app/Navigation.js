import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './index'; // Home component
import ClothingDetails from './ClothingDetails'; // Details screen component
import Bookmarks from './bookmarks'; // Bookmarks screen
import CarbonTracker from './CarbonTracker'; // Carbon Tracker screen
import SellOrDonate from './SellOrDonate'; // SellOrDonate screen component

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="ClothingDetails" component={ClothingDetails} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        <Stack.Screen name="CarbonTracker" component={CarbonTracker} />
        <Stack.Screen name="SellOrDonate" component={SellOrDonate} />  {/* This is how you should be registering screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
