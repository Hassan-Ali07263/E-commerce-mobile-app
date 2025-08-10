import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.green,
        paddingHorizontal: "5%"
    },
    loginText: {
        fontFamily: FONTS.regular,
        fontSize: 18,
        color: COLORS.black
    },
    welcomeText: {
        fontFamily: FONTS.regular,
        fontSize: 24,
        color: COLORS.black,
        textAlign: "center",
        marginVertical: "15%"
    },
    inputStyle: {
        borderRadius: 5,
        marginTop: "12%",
        paddingHorizontal: "5%",
        color: COLORS.black,
        fontFamily: FONTS.regular
    },
    forgetPasswordText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black
    },
    fogetButton: {
        alignSelf: "flex-end",
        marginTop: "5%"
    },
    titleStyle: {
        fontFamily: FONTS.semibold,
        fontSize: 20,
        color: COLORS.white
    },
    buttonStyle: {
        height: 55,
        width: "60%",
        borderRadius: 10,
        backgroundColor: COLORS.blue,
        alignSelf: "center",
        marginTop: "10%"
    },
    signupText: {
        fontFamily: FONTS.semibold,
        fontSize: 13,
        color: COLORS.blue
    },
    noAccountText: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black
    },
    noAccountView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    loginGoogleText: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.black,
        marginLeft: "8%"
    },
    googleImage: {
        height: 26,
        width: 30
    },
    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        height: 55,
        borderRadius: 5,
        paddingHorizontal: "7%",
        marginVertical: "10%",
        elevation: 1
    },
    orText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        textAlign: "center",
        marginTop: "10%"
    }
})