import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './styles';
import Buttons from '../../components/Buttons';
import PhoneInput from "react-native-phone-number-input";
import { COLORS } from '../../enums/styleEnums';
import { useNavigation } from '@react-navigation/native';
import { sendOtpNumber } from '../../apis';

const PhoneOtp = () => {
    const [value, setValue] = useState("");
    console.log(value)
    const navigation = useNavigation();
    const sendOtpFun = async () => {
        console.log("function start")
        const sendOtp = await fetch(sendOtpNumber, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ value: value })
        })
        console.log(sendOtp)
        const data = await sendOtp.json();
        console.log(data)
        if (data.success) {
            navigation.navigate("PhoneOtpVerification", { value });
        }
        else {
            Alert.alert("something went wrong")
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.otpVerificationText}>Otp Verification</Text>
            <Text style={styles.enterPhoneText}>Enter the phone number</Text>

            <PhoneInput
                containerStyle={styles.containerStyle}
                textContainerStyle={styles.textContainerStyle}
                textInputStyle={styles.textInputStyle}
                textInputProps={{ placeholderTextColor: COLORS.black }}
                defaultValue={value}
                defaultCode="PK"
                layout="second"
                placeholder="300 0000000"
                onChangeFormattedText={(text) => {
                    setValue(text);
                }}

            />

            <Buttons onPress={sendOtpFun} title={"Send Otp"} ButtonStyle={styles.buttonStyle} ButtonTextStyle={styles.buttonTextStyle} />
        </View>
    );
}
export default PhoneOtp;