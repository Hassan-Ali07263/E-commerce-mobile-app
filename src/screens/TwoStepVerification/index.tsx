import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './styles';
import Input from '../../components/Input';
import { COLORS } from '../../enums/styleEnums';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import { sendMail } from '../../apis';

const TwoStepVerification = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    const sendOtp = async () => {
        if (email) {
            console.log(email)
            const data = await fetch(sendMail, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })
            console.log(data)
            const result = await data.json();
            console.log(result)
            if (result) {
                navigation.navigate("OtpVerification", { email })
            }
            else {
                Alert.alert("Something went wrong")
            }
        }
        else {
            Alert.alert("enter your email")
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.twoStepStyle}>Two Step Verification</Text>
            <Text style={styles.sendEmailText}>Add your email to get otp</Text>

            <Input value={email} onChangeText={(text) => setEmail(text)} placeholder={"Enter email"} placeholdercolor={COLORS.black} inputStyle={styles.inputStyle} />
            <Buttons onPress={sendOtp} title={"Send otp"} ButtonStyle={styles.buttonStyle} ButtonTextStyle={styles.buttonTextStyle} />
        </View>
    );
}
export default TwoStepVerification;