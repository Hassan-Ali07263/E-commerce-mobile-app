import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../enums/styleEnums';
import Buttons from '../../components/Buttons';
import { signupUrl } from '../../apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const Register = async () => {
    console.log("run")
    if (name != '' || lastName != '' || email != '' || password != '' || confirmPassword != '') {
      console.log("function start")
      if (password == confirmPassword) {
        console.log("password matched")
        try {
          console.log('try functio run')
          const data = {
            firstName: name,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
          }
          console.log(data)
          const res = await fetch(signupUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          console.log(res)
          const result = await res.json();
          console.log(result)
          if (result) {
            await AsyncStorage.setItem("user", JSON.stringify(result.result))
            const data = await AsyncStorage.getItem("user")
            await AsyncStorage.setItem("token", result.auth);
            const token = await AsyncStorage.getItem("token")
            console.log("token saved in async storage is....",token)
            console.log("data saved in async storage is...", data)
            Alert.alert("success")
            navigation.navigate("SuccessScreen")
          }
          else {
            Alert.alert("error while signup")
          }
        }
        catch (err) {
          console.log(err)
        }
      }
      else {
        Alert.alert("password does not match")
      }
    }
    else {
      Alert.alert("fields are empty");
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.signupText}>Sign up for the Chunky app</Text>

      <Input placeholder={"Enter your name"} placeholdercolor={COLORS.black} value={name} onChangeText={(text) => setName(text)} inputStyle={styles.inputStyle} />
      <Input placeholder={"Last name"} placeholdercolor={COLORS.black} value={lastName} onChangeText={(text) => setLastName(text)} inputStyle={styles.inputStyle} />
      <Input placeholder={"Email/phone number"} placeholdercolor={COLORS.black} value={email} onChangeText={(text) => setEmail(text)} inputStyle={styles.inputStyle} />
      <Input placeholder={"Password"} placeholdercolor={COLORS.black} value={password} onChangeText={(text) => setPassword(text)} inputStyle={styles.inputStyle} secureTextEntry={true} />
      <Input placeholder={"Confirm password"} placeholdercolor={COLORS.black} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} inputStyle={styles.inputStyle} secureTextEntry={true} />

      <Buttons onPress={Register} title={"Sign Up"} ButtonTextStyle={styles.tittleStyle} ButtonStyle={styles.buttonStyle} />

    </View>
  );
}
export default Signup;