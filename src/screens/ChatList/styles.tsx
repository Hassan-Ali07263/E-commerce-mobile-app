import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    cartText: {
        fontFamily: FONTS.bold,
        fontSize: 14,
        color: COLORS.black,
        textAlign: "center",
        paddingVertical: "5%",
        backgroundColor: COLORS.green
    },
    buttonStyle: {
        height: 40,
        width: "20%",
        borderRadius: 10
    },
    buttonTextStyle: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.white
    },
    nameText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black
    },
    imageStyle: {
        height: 100,
        width: 100,
        marginRight: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    itemView: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: "5%",
        justifyContent: "space-between"
    },

})