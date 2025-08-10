import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.green,
        paddingHorizontal: "5%"
    },
    otpVerifyText: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        color: COLORS.black,
        alignSelf: "center",
        marginVertical: "5%"
    },
    addOtpText: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black
    },
    otpInput: {
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: FONTS.medium,
        fontSize: 16
    },
    otpContainer: {
        marginVertical: "10%"
    },
    buttonStyle: {
        width: "60%",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: "10%"
    },
    buttonTextStyle: {
        fontFamily: FONTS.semibold,
        fontSize: 17,
        color: COLORS.white
    },
    sendAgainText: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.blue,
        marginBottom: "5%"
    },
    notRecieveText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black
    },
    notRecievedView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})