import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { IMAGES } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen=()=> {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.checkImage} source={IMAGES.Check} />
      <Text style={styles.successText}>Your Sign up was successful</Text>

      <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
        <Text style={styles.continueText}>Continue to Home</Text>
      </TouchableOpacity>
     </View>
  );
}
export default SuccessScreen;