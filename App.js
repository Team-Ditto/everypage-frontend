import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
// import { Provider } from 'react-redux';

import configureStore from './redux/store';

import { AuthContextProvider } from './contexts/AuthContext';
import AppStack from './stacks/AppStack';

// const reduxStore = configureStore();

export default function App() {
  return (
    // disabling the redux for now
    // <Provider store={reduxStore}>
    <AuthContextProvider>
      <NativeBaseProvider>
        <AppStack />
        <StatusBar style='auto' />
      </NativeBaseProvider>
    </AuthContextProvider>
    // </Provider>
  );
}
