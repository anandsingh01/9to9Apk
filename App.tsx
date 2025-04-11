// App.js

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { ToastProvider } from './src/service/ToastProvider';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // Load fonts, fetch data, or perform any initial setup here
    };

    init().finally(() => {
      BootSplash.hide({fade: true});
      console.log('Splash screen hidden');
    });
  }, []);

  return (
    <ToastProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ToastProvider>
  );
};

export default App;
