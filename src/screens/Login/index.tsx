import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../enums/styleEnums';
import Buttons from '../../components/Buttons';
import { IMAGES } from '../../assets/images';
import { loginUrl } from '../../apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const loginFun = async () => {
        const response = await fetch(loginUrl, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName: name, password: password })
        });

        const res = await response.json();
        console.log("response is ....", res);

        if (res.user.firstName) {
            await AsyncStorage.setItem("user", JSON.stringify(res.user))
            await AsyncStorage.setItem("token", res.auth);
            const token = await AsyncStorage.getItem("token")
            console.log("token is...", token)
            const data = await AsyncStorage.getItem("user");
            console.log("data is" + data)
            navigation.navigate("TwoStepVerification")
        }
        else {
            console.log("error")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            <Text style={styles.loginText}>Log In to your account</Text>

            <Input value={name} onChangeText={(text) => setName(text)} placeholder={"Enter your name"} placeholdercolor={COLORS.black} inputStyle={styles.inputStyle} />
            <Input value={password} onChangeText={(text) => setPassword(text)} placeholder={"Enter your password"} placeholdercolor={COLORS.black} inputStyle={styles.inputStyle} secureTextEntry={true} />

            <TouchableOpacity style={styles.fogetButton}>
                <Text style={styles.forgetPasswordText}>Forgotten password?</Text>
            </TouchableOpacity>

            <Buttons onPress={loginFun} ButtonTextStyle={styles.titleStyle} ButtonStyle={styles.buttonStyle} title={"Log In"} />

            <Text style={styles.orText}>OR</Text>

            <TouchableOpacity onPress={() => navigation.navigate("PhoneOtp")}
                style={styles.googleButton}>
                <Image style={styles.googleImage} source={IMAGES.Google} />
                <Text style={styles.loginGoogleText}>Log in with your Google account</Text>
            </TouchableOpacity>

            <View style={styles.noAccountView}>
                <Text style={styles.noAccountText}>Dont’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Login;