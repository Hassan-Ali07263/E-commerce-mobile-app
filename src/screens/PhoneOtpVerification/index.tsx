import React, { useRef, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './styles';
import OTPTextInput from 'react-native-otp-textinput';
import Buttons from '../../components/Buttons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { phoneOtpVerify } from '../../apis';

const PhoneOtpVerification = () => {
    const [otp, setOtp] = useState('');
    const otpInputRef = useRef(null);
    const navigation = useNavigation();
    const route = useRoute();
    const { value } = route.params
    const verifyOtp = async () => {
        const data = await fetch(phoneOtpVerify, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ value, otp })
        })
        const result = await data.json();
        console.log(result)
        if (result.success === "expired") {
            Alert.alert("Otp expired")
            setOtp("");
        }
        else if (result.success === true) {
            setOtp("")
            navigation.navigate("Login")
        }
        else {
            setOtp("")
            Alert.alert("something went wrong")
        }
    }
    return (
        <View style={styles.constainer}>
            <Text style={styles.otpVerificationText}>Otp Verification</Text>
            <Text style={styles.enterOtpText}>Enter your Otp</Text>

            <OTPTextInput
                ref={otpInputRef}
                inputCount={4}
                tintColor="#3b82f6"
                offTintColor="#ccc"
                handleTextChange={(text) => setOtp(text)}
                containerStyle={styles.otpContainer}
                textInputStyle={styles.otpInput}
            />

            <Buttons onPress={verifyOtp} title={"Verify"} ButtonTextStyle={styles.buttonTextStyle} ButtonStyle={styles.buttonStyle} />

        </View>
    );
}
export default PhoneOtpVerification;