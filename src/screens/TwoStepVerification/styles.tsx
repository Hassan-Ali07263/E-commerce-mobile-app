import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.green,
        paddingHorizontal: "5%"
    },
    buttonTextStyle: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.white
    },
    buttonStyle: {
        height: 50,
        width: "60%",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: "10%"
    },
    inputStyle: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        paddingHorizontal: "5%",
        borderRadius: 10,
        marginVertical: "5%"
    },
    sendEmailText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        marginVertical: "5%"

    },
    twoStepStyle: {
        fontFamily: FONTS.semibold,
        fontSize: 18,
        color: COLORS.black,
        textAlign: "center",
        marginVertical: "5%"
    }
})