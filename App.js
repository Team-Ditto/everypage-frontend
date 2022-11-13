import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

// import { Provider } from 'react-redux';
import { AuthContextProvider } from './contexts/AuthContext';
import { NotificationContextProvider } from './contexts/NotificationContext';
import { ChatContextProvider } from './contexts/ChatContext';
import AppStack from './stacks/AppStack';
// const reduxStore = configureStore();

export default function App() {
  return (
    // disabling the redux for now
    // <Provider store={reduxStore}>
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
    // </Provider>
  );
}
