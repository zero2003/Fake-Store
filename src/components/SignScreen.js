import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Alert,
} from "react-native";
import Button from "../components/Button";
import { login } from './AuthSlice';
import { useDispatch } from "react-redux";

export default SignScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUp, triggerSignUp] = useState(false);
    const dispatch = useDispatch();

    const clearInputFields = () => {
        setEmail("");
        setPassword("");
        setName("");
    };

    const triggerSignMethod = () => {
        clearInputFields();
        triggerSignUp((prevState) => !prevState);
    };

    const handleSignIn = async () => {
        const response = await fetch("http://10.0.2.2:3000/users/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const res = await response.json();

        if (res.status === "OK") {
            dispatch(
                login({
                    token: res.token,
                    id: res.id,
                    name: res.name,
                    email: res.email,
                })
            );
            navigation.navigate("User Details");
        } else {
            Alert.alert(res.message);
        }
    };

    const handleSignUp = async () => {
        console.log("Signed up");

        const response = await fetch("http://10.0.2.2:3000/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const res = await response.json();
        console.log("Response: ", res);
        if (res.status === "OK") {
            dispatch(
                login({
                    token: res.token,
                    id: res.id,
                    name: res.name,
                    email: res.email,
                })
            );
            navigation.navigate("User Details");
        } else {
            Alert.alert(res.message);
        }
    };

    const signBtnHandler = () => {
        if (signUp) handleSignUp();
        else handleSignIn();
        clearInputFields();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.headingText}>
                    {!signUp
                        ? "Sign in with email and password"
                        : "Sign Up as a new user"}
                </Text>

                <View style={styles.inputContainer}>
                    {signUp && (
                        <View style={styles.inputEl}>
                            <Text>Name</Text>
                            <TextInput
                                value={name}
                                style={styles.inputfield}
                                onChangeText={(val) => setName(val)}
                            ></TextInput>
                        </View>
                    )}

                    <View style={styles.inputEl}>
                        <Text>Email</Text>
                        <TextInput
                            value={email}
                            style={styles.inputfield}
                            onChangeText={(val) => setEmail(val)}
                            autoCapitalize="none"
                        ></TextInput>
                    </View>

                    <View style={styles.inputEl}>
                        <Text>Password</Text>
                        <TextInput
                            autoCapitalize="none"
                            style={styles.inputfield}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                        ></TextInput>
                    </View>
                </View>

                <View style={styles.btnContainar}>
                    <Button
                        iconName={"remove-circle-sharp"}
                        text={"Clear"}
                        style={styles.btn}
                        onClickFn={() => clearInputFields()}
                    ></Button>
                    <Button
                        iconName={"arrow-forward-sharp"}
                        text={!signUp ? "Sign In" : "Sign Up"}
                        style={styles.btn}
                        onClickFn={() => signBtnHandler()}
                    ></Button>
                </View>

                <Text onPress={() => triggerSignMethod()} style={styles.signUp}>
                    Switch to:
                    {signUp ? " Sign In " : " Sign Up"}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    headingText: {
        fontWeight: "600",
        fontSize: 18,
    },
    form: {
        backgroundColor: "lightgrey",
        padding: 15,
        borderRadius: 5,
    },
    inputContainer: {
        marginTop: 10,
    },
    inputEl: {
        marginTop: 10,
    },
    inputfield: {
        backgroundColor: "white",
        padding: 7,
        marginVertical: 5,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
    },
    btnContainar: {
        display: "flex",
        flexDirection: "row",
    },
    btn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
        padding: 10,
        margin: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
    },
    signUp: {
        alignSelf: "center",
        fontSize: 12,
        color: "black",
    },
});