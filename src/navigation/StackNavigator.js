// src/navigation/StackNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from './RoutesContants';

// Import your screens
import IntroScreen from '../screens/IntroScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import TabNavigator from './TabNavigator';
import RedirectScreen from '../components/OtherScreens/RedirectScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREENS.GET_STARTED_SCREEN} component={IntroScreen} />
    <Stack.Screen name={SCREENS.ON_BOARDING_SCREEN} component={OnboardingScreen} />
    <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={SCREENS.OTP_SCREEN} component={OtpScreen} />
    <Stack.Screen name={SCREENS.HOMEPAGE_SCREEN} component={TabNavigator} />
    <Stack.Screen name={SCREENS.REDIRECT} component={RedirectScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
