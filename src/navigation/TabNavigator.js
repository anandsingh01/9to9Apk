// src/navigation/TabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/color';

// Import the screens for your tabs
import HomePage from '../screens/HomePageScreen';
import EnrollScreen from '../screens/EnrollScreen';
import RedirectScreen from '../components/OtherScreens/RedirectScreen';

const Tab = createBottomTabNavigator();

const TABS = [
  {
    name: 'Homepage',
    component: HomePage,
    icon: 'home-outline',
    iconFocused: 'home',
  },
  {
    name: 'Progress',
    component: EnrollScreen,
    icon: 'time-outline',
    iconFocused: 'time',
  },
  {
    name: 'Classes',
    component: RedirectScreen,
    icon: 'school-outline',
    iconFocused: 'school',
  },
  {
    name: 'Teachers',
    component: RedirectScreen,
    icon: 'people-outline',
    iconFocused: 'people',
  },
  {
    name: 'Dashboard',
    component: RedirectScreen,
    icon: 'grid-outline',
    iconFocused: 'grid',
  },
];

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => {
      const tab = TABS.find(t => t.name === route.name) || {
        icon: 'help-outline',
        iconFocused: 'help',
      };

      return {
        headerShown: false,
        tabBarIcon: ({focused, color}) => (
          <Ionicons
            name={focused ? tab.iconFocused : tab.icon}
            size={20}
            color={color}
          />
        ),
        tabBarLabelStyle: {fontSize: 12, paddingBottom: 10, fontWeight: '600'},
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        tabBarStyle: {
          height: 75,
          paddingBottom: 5,
          borderTopWidth: 1,
          borderColor: COLORS.border,
          backgroundColor: COLORS.white,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 2,
        },
      };
    }}>
    {TABS.map(tab => (
      <Tab.Screen  key={tab.name} name={tab.name} component={tab.component} />
    ))}
  </Tab.Navigator>
);

export default TabNavigator;
