import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../enums/styleEnums';

const Input = (route) => {
  const { placeholder, placeholdercolor, value, onChangeText, inputStyle, secureTextEntry } = route;
  return (
    <TextInput style={[styles.inputContainer, inputStyle]}
      placeholder={placeholder}
      placeholderTextColor={placeholdercolor}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.white,
  }
})
export default Input;