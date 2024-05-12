import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import {Ionicons} from "@expo/vector-icons"
 
export default SplashScreen = ({ navigation }) => {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.title}>FAKE STORE</Text>
        <Image source={require("./Images/storeimg.png")} style={styles.image} />

        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Bottom-Navigator')}>
          <Ionicons name={'arrow-forward-sharp'} size={22} color={'black'} />
          <Text> Start Shopping !</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EE9E",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: "Helvetica",
    fontWeight: "700",
    // color: "#E76D83",
    textShadowColor: "#000000",
    textShadowOffset: { height: 1 },
    textShadowRadius: 3,
  
  },
  image: {
    width: 240,
    height: 300,
    marginTop: 80
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E76D83",
    padding: 10,
    margin: 20,
    borderRadius: 20,
  },
});