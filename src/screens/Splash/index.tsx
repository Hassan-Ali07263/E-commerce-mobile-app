import React from "react";
import { Image, Text, View } from 'react-native';
import { styles } from "./styles";
import { IMAGES } from "../../assets/images";
import Buttons from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.splashImageStyle} resizeMode="contain" source={IMAGES.SplashImage} />

            <View style={styles.TextView}>
                <Text style={styles.BuySellText}>Buy </Text>
                <Text style={styles.otherText}>And </Text>
                <Text style={styles.BuySellText}>Sell </Text>
                <Text style={styles.otherText}>Anything Faster </Text>
            </View>
            <Text style={styles.otherTextLast}>With The Chunky App </Text>

            <Text style={styles.offerText}>Massive discounts and offers when you shope.</Text>

            <Buttons onPress={() => navigation.navigate("Login")} title={"Log In"} ButtonStyle={styles.ButtonStyle} />
            <Buttons onPress={() => navigation.navigate("Signup")} title={"Sign Up"} ButtonStyle={styles.SignupButtonStyle} ButtonTextStyle={styles.ButtonTextStyle} />

        </View>
    )
}

export default Splash;