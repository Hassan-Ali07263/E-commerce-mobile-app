import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as ui from '../../screens/index'

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={ui.Splash} />
        <Stack.Screen name='Login' component={ui.Login} />
        <Stack.Screen name='Signup' component={ui.Signup} />
        <Stack.Screen name='SuccessScreen' component={ui.SuccessScreen} />
        <Stack.Screen name='Home' component={ui.Home} />
        <Stack.Screen name='AddProduct' component={ui.AddProduct} />
        <Stack.Screen name='TwoStepVerification' component={ui.TwoStepVerification} />
        <Stack.Screen name='OtpVerification' component={ui.OtpVerification} />
        <Stack.Screen name='PhoneOtp' component={ui.PhoneOtp} />
        <Stack.Screen name='PhoneOtpVerification' component={ui.PhoneOtpVerification} />
        <Stack.Screen name='ChatList' component={ui.ChatList} />
        <Stack.Screen name='Chating' component={ui.Chating} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation;