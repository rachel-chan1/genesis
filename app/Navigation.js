import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './index'; // Home component
import ClothingDetails from './ClothingDetails'; // Details screen component

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="ClothingDetails" component={ClothingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// // navigation.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import App from './(tabs)/index'; // Home component
// import ClothingDetails from './ClothingDetails'; // Details screen component

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   console.log('AppNavigator is being rendered');
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={App} />
//         <Stack.Screen name="ClothingDetails" component={ClothingDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


// export default AppNavigator;  // Ensure this export is here
