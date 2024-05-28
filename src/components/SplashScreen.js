import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Bottom-Navigator'), 100);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.title}>FAKE STORE</Text>
        <Image source={require("./Images/storeimg.png")} style={styles.image} />
        {/* If you want to keep the button for aesthetic reasons but disable its functionality, you can comment out the onPress handler
        <TouchableOpacity style={styles.btn}>
          <Text> Start Shopping !</Text>
        </TouchableOpacity>
        */}
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
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textShadowColor: "#000",
    textShadowOffset: { height: 1 },
    textShadowRadius: 3,
  },
  image: {
    width: 240,
    height: 300,
    marginTop: 80,
  },
  // Comment or remove the button style if you are not using the button
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

export default SplashScreen;
