import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles=StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor:COLORS.green,
        paddingHorizontal:"5%"
    },
    buttonStyle:{
        width:"60%",
        borderRadius:10,
        alignSelf:"center",
        marginVertical:"10%"
    },
    buttonTextStyle:{
        fontFamily:FONTS.semibold,
        fontSize:16,
        color:COLORS.white
    },
    otpInput:{
        borderRadius:10,
        borderWidth:2,
        borderColor:COLORS.blue
    },
    otpContainer:{
        marginVertical:"10%"
    },
    enterOtpText:{
        fontFamily:FONTS.medium,
        fontSize:16,
        color:COLORS.black
    },
    otpVerificationText:{
        fontFamily:FONTS.bold,
        fontSize:18,
        color:COLORS.black,
        alignSelf:"center",
        marginVertical:"10%"
    }
})