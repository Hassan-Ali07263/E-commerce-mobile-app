import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.green,
        paddingHorizontal: "5%"
    },
    signupText: {
        fontFamily: FONTS.regular,
        fontSize: 18,
        color: COLORS.black,
        marginVertical: "5%"
    },
    welcomeText: {
        fontFamily: FONTS.regular,
        fontSize: 24,
        color: COLORS.black,
        alignSelf: "center",
        marginTop: "10%"
    },
    inputStyle: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.black,
        paddingHorizontal: "5%",
        marginTop: "7%",
        borderRadius: 5
    },
    buttonStyle:{
        height:55,
        backgroundColor:COLORS.blue,
        borderRadius:10,
        width:"60%",
        alignSelf:"center",
        marginTop:"20%"
    },
    tittleStyle:{
        fontFamily:FONTS.semibold,
        fontSize:20,
        color:COLORS.white
    }
})