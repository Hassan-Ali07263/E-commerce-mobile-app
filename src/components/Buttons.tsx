import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../enums/styleEnums';

const Buttons = (route) => {
    const { ButtonStyle, ButtonTextStyle, title, onPress } = route;
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.mainButton, ButtonStyle]}>
            <Text style={[styles.buttonText, ButtonTextStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}
export default Buttons;

const styles = StyleSheet.create({
    mainButton: {
        height: 55,
        width: "100%",
        backgroundColor: COLORS.black,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontFamily: FONTS.medium,
        fontSize: 24,
        color: COLORS.white
    }
})