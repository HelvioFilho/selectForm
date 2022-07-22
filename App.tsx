import 'react-native-gesture-handler';
import React from 'react';
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import { Router } from './app/router';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
      });

      if (!fontsLoaded){
          return <AppLoading/>;
      }
    return (
        <Router />
    )
}

