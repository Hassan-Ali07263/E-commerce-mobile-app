import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center"
    },
    checkImage: {
        height: 67,
        width: 88,
        alignSelf: "center",
        marginVertical: "4%"
    },
    successText: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        color: COLORS.black,
        marginBottom: "15%"
    },
    continueText: {
        fontFamily: FONTS.medium,
        fontSize: 20,
        color: COLORS.blue,
        textDecorationStyle: "solid",
        textDecorationLine: "underline"
    }
})