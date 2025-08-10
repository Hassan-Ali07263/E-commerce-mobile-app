import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    buttonStyle: {
        width: "45%",
        alignSelf: "center",
        marginVertical: "5%",
        borderRadius: 10,
        backgroundColor: COLORS.green,
        elevation: 5
    },
    addTextStyle: {
        fontFamily: FONTS.semibold,
        fontSize: 18,
        color: COLORS.black
    },
    productName: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black
    },
    productImage: {
        height: 200,
        // width:"100%",
    },
    productView: {
        flex: 1,
        backgroundColor: COLORS.green,
        marginHorizontal: "2%",
        width: "45%",
        padding: "1%",
        justifyContent:"space-between"
    },
    deleteButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: COLORS.black,
        height: 35,
        marginVertical: "2%",
        width: "45%"
    },
    deleteText: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.white
    },
    buttonsStyle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    addCartButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: COLORS.black,
        height: 35,
        marginVertical: "2%",
    },
    innerView: {
        backgroundColor: COLORS.green,
        height: "90%",
        width: "80%",
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 10,
        elevation: 10,
        paddingHorizontal: "5%"
    },
    modalMainView: {
        justifyContent: "center",
        alignItems: "center"
    },
    inputStyle: {
        borderRadius: 5,
        elevation: 2,
        paddingHorizontal: "5%",
        marginTop: "5%",
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black
    },
    updateDataText: {
        fontFamily: FONTS.semibold,
        fontSize: 18,
        textAlign: "center",
        marginVertical: "5%"
    },
    updateButtonStyle: {
        backgroundColor: COLORS.blue,
        height: 45,
        width: "60%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: "8%"
    },
    buttonTextStyle: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        color: COLORS.white
    },
    addPhotoText: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        color: COLORS.white
    },
    imageButton: {
        height: 130,
        width: "50%",
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: "5%",
        overflow: "hidden"
    },
    imageStyle: {
        height: "100%",
        width: "100%"
    },
    searchInputStyle: {
        marginHorizontal: "5%",
        backgroundColor: COLORS.green,
        marginVertical: "2%",
        paddingHorizontal: "5%",
        borderRadius: 10
    },
    topButtonView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "5%"
    }
})