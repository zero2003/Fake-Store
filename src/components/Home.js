import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Categories from './Categoris';// Adjusted path
import SplashScreen from './src/components/SplashScreen';



export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <Categories navigation={navigation}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
