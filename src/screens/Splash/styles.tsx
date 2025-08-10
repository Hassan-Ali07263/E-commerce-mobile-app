import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: "5%"
    },
    splashImageStyle: {
        height: 450,
        width: 338,
        alignSelf: "center"
    },
    otherText: {
        fontFamily: FONTS.medium,
        fontSize: 24,
        color: COLORS.black
    },
    otherTextLast: {
        fontFamily: FONTS.medium,
        fontSize: 24,
        color: COLORS.black,
        textAlign: "center"
    },
    BuySellText: {
        fontFamily: FONTS.medium,
        fontSize: 24,
        color: COLORS.blue
    },
    TextView: {
        flexDirection: "row",
        alignSelf: "center"
    },
    offerText: {
        fontFamily:FONTS.regular,
        fontSize:12,
        color:COLORS.black,
        textAlign:"center",
        marginTop:"5%",
        marginBottom:"10%"
    },
    ButtonStyle:{
        height:55,
        backgroundColor:COLORS.blue,
        borderRadius:5,
        marginTop:"5%"
    },
    ButtonTextStyle:{
        color:COLORS.blue
    },
    SignupButtonStyle:{
        height:55,
        backgroundColor:COLORS.white,
        borderRadius:5,
        borderWidth:2,
        borderColor:COLORS.blue,
        marginTop:"5%"
    }
})