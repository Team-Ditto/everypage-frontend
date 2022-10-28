import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../contexts/AuthContext';
import TabStack from './TabStack';

import Login from '../screens/User/Login';
import Signup from '../screens/User/Signup';
import Scanner from '../screens/Assets/Scanner';
import SingleBook from '../screens/Cards/Book/SingleBook';
import AddBook from '../screens/Main/Book/AddBook';
import Genres from '../screens/Main/Genres';
import SingleGenre from '../screens/Main/SingleGenre';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const { currentUser } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute='Login'>
        {/* {currentUser ? ( */}
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
          <Stack.Screen name='Genres' component={Genres} />
          <Stack.Screen
            name='SingleGenre'
            component={SingleGenre}
            options={({ route }) => ({ title: route.params.genre })}
          />
        </>
        {/* ) : (
          <>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
