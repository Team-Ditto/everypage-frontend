import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { AuthContextProvider } from './contexts/AuthContext';
import { NotificationContextProvider } from './contexts/NotificationContext';
import { ChatContextProvider } from './contexts/ChatContext';
import AppStack from './stacks/AppStack';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  LogBox.ignoreAllLogs();
  const [fontsLoaded] = useFonts({
    'SofiaPro-Black': require('./assets/fonts/SofiaPro-Black.otf'),
    'SofiaPro-Bold': require('./assets/fonts/SofiaPro-Bold.otf'),
    'SofiaPro-Light': require('./assets/fonts/SofiaPro-Light.otf'),
    'SofiaPro-Medium': require('./assets/fonts/SofiaPro-Medium.otf'),
    'SofiaPro-Regular': require('./assets/fonts/SofiaPro-Regular.otf'),
    'SofiaPro-SemiBold': require('./assets/fonts/SofiaPro-SemiBold.otf'),
    Quicksand: require('./assets/fonts/Quicksand-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const theme = extendTheme({
    fontConfig: {
      SofiaPro: {
        200: 'SofiaPro-UltraLight',
        300: 'SofiaPro-Light',
        400: 'SofiaPro-Regular',
        500: 'SofiaPro-Medium',
        600: 'SofiaPro-SemiBold',
        700: 'SofiaPro-Bold',
        800: 'SofiaPro-Black',
      },
      Quicksand: 'Quicksand',
    },
    fonts: {
      heading: 'Quicksand',
      body: 'SofiaPro',
      mono: 'SofiaPro',
    },
  });

  return (
    <AuthContextProvider>
      <NotificationContextProvider>
        <ChatContextProvider>
          <NativeBaseProvider theme={theme}>
            <AppStack />
            <StatusBar style='auto' />
          </NativeBaseProvider>
        </ChatContextProvider>
      </NotificationContextProvider>
    </AuthContextProvider>
  );
}
