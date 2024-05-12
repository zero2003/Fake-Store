
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './src/components/SplashScreen'; // Make sure this path is correct
import Home from './src/components/Home';
import Products from './src/components/Products';
import Iteam from './src/components/Iteam';// Make sure the name matches the export
import ShoppingCart from './ShoppingCart';
import { Provider } from 'react-redux';
// Import more screens if necessary

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {



  const ProductScreenStack = () => {
    return (
      <Stack.Navigator initialRouteName='Categories'>
        <Stack.Screen name={'Categories'} component={Home} />
        <Stack.Screen name={'Products'} component={Products} />
        <Stack.Screen name={'Item'} component={Iteam} />
      </Stack.Navigator>
    )

  }

  const BottomNavigator = () => {
    return (
      <Tab.Navigator initialRouteName='Product-nav'>
        <Tab.Screen name='Product-nav' component={ProductScreenStack} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront-sharp" color={'black'} size={18} />
          ), headerShown: false
        }} />
        <Tab.Screen name='Shopping Cart' component={ShoppingCart} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-sharp" color={'black'} size={18} />
          ), headerShown: false
        }} />
      </Tab.Navigator>
    )
  }

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash-Screen">
          <Stack.Screen name="Splash-Screen" component={SplashScreen} />
          <Stack.Screen name="Bottom-Navigator" component={BottomNavigator} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Item" component={Iteam} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
