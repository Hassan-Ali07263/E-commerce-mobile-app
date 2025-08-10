import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/styleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.green
    },
    inputStyle: {
        paddingHorizontal: "5%",
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        borderRadius: 5,
        borderColor: COLORS.black,
        borderWidth: .5,
        marginTop: "5%"
    },
    addText: {
        fontFamily: FONTS.semibold,
        fontSize: 18,
        color: COLORS.black,
        alignSelf: "center",
        marginVertical: "5%"
    },
    inputViewStyle: {
        marginHorizontal: "5%"
    },
    imageButton: {
        height: 100,
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.blue,
        borderRadius: 10,
        marginTop: "5%",
        overflow:"hidden"
    },
    addImageText: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        color: COLORS.white
    },
    buttonStyle:{
        backgroundColor:COLORS.blue,
        marginTop:"10%",
        borderRadius:10
    },
    addTextStyle:{
        fontFamily:FONTS.medium,
        fontSize:18,
        color:COLORS.white
    },
    imageStyle:{
        height:"100%",
        width:"100%",
    }
})