import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import { AuthContextProvider } from './contexts/AuthContext';
import { NotificationContextProvider } from './contexts/NotificationContext';
import { ChatContextProvider } from './contexts/ChatContext';
import AppStack from './stacks/AppStack';

export default function App() {
  return (
    <AuthContextProvider>
      <NotificationContextProvider>
        <ChatContextProvider>
          <NativeBaseProvider>
            <AppStack />
            <StatusBar style='auto' />
          </NativeBaseProvider>
        </ChatContextProvider>
      </NotificationContextProvider>
    </AuthContextProvider>
  );
}
