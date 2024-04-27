// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home'); // Replace 'Home' with the name of your home screen
    }, 2000); // The splash screen will be shown for 2 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('C:\components\Images\DALL·E .webp')} // Replace with the actual path to your logo image
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to Fake Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Set the width to your preference
    height: 200, // Set the height to your preference
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
