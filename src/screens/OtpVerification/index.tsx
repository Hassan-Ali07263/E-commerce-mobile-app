import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import OTPTextInput from 'react-native-otp-textinput';
import Buttons from '../../components/Buttons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { otpVerify, sendMail } from '../../apis';

const OtpVerification = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { email } = route.params;
    console.log(email)
    const [otp, setOtp] = useState('');
    const otpInputRef = useRef(null);

    const handleOTPChange = (otp) => {
        setOtp(otp);
        console.log('Entered OTP:', otp);
    };

    const sendAgain = async () => {
        if (email) {
            const data = await fetch(sendMail, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })
            console.log(data);
            const result = await data.json();
            console.log(result)
            if (result) {
                Alert.alert("please wait", "mail is sending")
            }
            else {
                Alert.alert("something went wrong")
            }
        }
        else {
            Alert.alert("Email not recieved from previous page")
        }
    }

    const verifyOtp = async () => {
        if (email && otp) {
            const data = await fetch(otpVerify, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, otp })
            })
            console.log(data)
            const result = await data.json();
            console.log(result)
            if (result.success) {
                navigation.navigate("Home")
            }
            else {
                Alert.alert("wrong otp")
            }
        }
        else {
            Alert.alert("please enter email and otp")
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.otpVerifyText}>Otp Verification</Text>
            <Text style={styles.addOtpText}>Please enter the otp sended to your email</Text>

            <View>
                <OTPTextInput
                    ref={otpInputRef}
                    inputCount={4}
                    tintColor="#3b82f6"
                    offTintColor="#ccc"
                    handleTextChange={handleOTPChange}
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.otpInput}
                />
            </View>

            <View style={styles.notRecievedView}>
                <Text style={styles.notRecieveText}>Don't recieve OTP?</Text>
                <TouchableOpacity onPress={sendAgain}>
                    <Text style={styles.sendAgainText}> Send again</Text>
                </TouchableOpacity>
            </View>

            <Buttons onPress={verifyOtp} title={"Verify"} ButtonTextStyle={styles.buttonTextStyle} ButtonStyle={styles.buttonStyle} />
        </View>
    );
}
export default OtpVerification;