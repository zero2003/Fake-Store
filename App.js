
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
import { Provider, useSelector } from 'react-redux';
import Store from './src/components/Store';
import UserProfile from "./src/components/UserProfile";
import Orders from './src/components/Orders';
import UserNaz from './src/components/UserNaz';
import { getCartSummary } from './src/components/ShoppingCartSlice';
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
    const { totalQty } = useSelector(getCartSummary)
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
          ), headerShown: false, tabBarBadge: totalQty > 0 ? totalQty : null
        }} />
        <Tab.Screen
          name="My Orders"
          component={Orders}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="basket" color={'black'} size={18} />
            ),
            headerShown: false,
            tabBarBadgeStyle: { color: "white" },
          }}
        />
        <Tab.Screen
          name="User Profile"
          component={UserNaz}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle -sharp" color={'black'} size={18} />
            ),
            headerShown: false,
            tabBarBadgeStyle: { color: "white" },
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <Provider store={Store}>
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
