import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import AppStack from './stacks/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style='auto' />
    </NativeBaseProvider>
  );
}
