// src/navigation/DrawerNavigator.js

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import DrawerContent from './DrawerContent'; // Ensure this file exists and exports a valid component

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{headerShown: false}}>
    <Drawer.Screen name="Home" component={StackNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
