import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
