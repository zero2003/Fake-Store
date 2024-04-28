/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/components/SplashScreen'; // Make sure this path is correct
import Home from './src/components/Home';
import Products from './src/components/Products';
import Iteam from './src/components/Iteam';// Make sure the name matches the export
// Import more screens if necessary

const Stack = createStackNavigator();

function App() {
  // const [isAppReady, setIsAppReady] = React.useState(false);

  // Simulate an async loading task (like fetching data)
  // React.useEffect(() => {
  //   const prepareApp = async () => {
  //     // Perform async tasks like data fetching, etc.
  //     // For demo purposes, we'll just wait for 2 seconds
  //     setTimeout(() => {
  //       setIsAppReady(true); // Set app ready state to true to hide SplashScreen
  //     }, 2000);
  //   };

  //   prepareApp();
  // }, []);

  // if (!isAppReady) {
  //   // If the app is not ready, render the SplashScreen component
  //   return <SplashScreen />;
  // }

  // When the app is ready, render the navigation container with your screens
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash-Screen">
        <Stack.Screen name="Splash-Screen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Item" component={Iteam} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
