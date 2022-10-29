import { useContext } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import Login from '../screens/User/Login';
import Signup from '../screens/User/Signup';
import Scanner from '../screens/Assets/Scanner';
import SingleBook from '../screens/Cards/Book/SingleBook';
import TabStack from './TabStack';
import AddBook from '../screens/Main/Book/AddBook';
import Location from '../screens/Assets/Location';
import { BlackShades, BlueShades, whiteShades } from '../assets/style/color';
import { Button } from 'native-base';
import ReaderInfo from '../screens/User/ReaderInfo';

import { AuthContext } from '../contexts/AuthContext';
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const { currentUser } = useContext(AuthContext);

  return (
    // <Provider store={reduxStore}>
    <NavigationContainer>
      <Stack.Navigator initialRoute='Login'>
        {currentUser ? (
          <>
            <Stack.Screen
              name='BottomTab'
              component={TabStack}
              options={({ route }) => ({
                headerShown: false,
              })}
            />
            <Stack.Screen name='Scanner' component={Scanner} />
            <Stack.Screen name='SingleBook' component={SingleBook} />
            <Stack.Screen name='AddBook' component={AddBook} />
            <Stack.Screen
              name='ReaderInfo'
              component={ReaderInfo}
              options={{
                headerStyle: {
                  backgroundColor: BlueShades.primaryBlue,
                },
                cardStyle: { backgroundColor: BlueShades.primaryBlue },
                headerTintColor: whiteShades.primaryWhite,
              }}
            />
            <Stack.Screen
              name='Location'
              component={Location}
              options={{
                headerStyle: {
                  backgroundColor: BlueShades.primaryBlue,
                },
                cardStyle: { backgroundColor: BlueShades.primaryBlue },
                headerTintColor: whiteShades.primaryWhite,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name='Login'
              component={Login}
              options={{
                headerStyle: {
                  backgroundColor: BlueShades.primaryBlue,
                },
                cardStyle: { backgroundColor: BlueShades.primaryBlue },
                headerTintColor: whiteShades.primaryWhite,
              }}
            />
            <Stack.Screen
              name='Signup'
              component={Signup}
              options={{
                headerStyle: {
                  backgroundColor: BlueShades.primaryBlue,
                },
                cardStyle: { backgroundColor: BlueShades.primaryBlue },
                headerTintColor: whiteShades.primaryWhite,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default AppStack;
