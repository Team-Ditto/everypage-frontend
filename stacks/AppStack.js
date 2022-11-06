import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/User/Login';
import Signup from '../screens/User/Signup';
import Scanner from '../screens/Assets/Scanner';
import SingleBook from '../screens/Cards/Book/SingleBook';
import TabStack from './TabStack';
import AddBook from '../screens/Main/Book/AddBook';
import Location from '../screens/Assets/Location';
import { BlueShades, whiteShades } from '../assets/style/color';
import ReaderInfo from '../screens/User/ReaderInfo';
import Genres from '../screens/Main/Genres';
import SingleGenre from '../screens/Main/SingleGenre';
import SingleView from '../screens/Cards/Discover/SingleView';
import WishlistButton from '../screens/Assets/WishlistButton';

import { AuthContext } from '../contexts/AuthContext';
import SearchResult from '../screens/Assets/SearchResult';
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
              name='SearchResult'
              component={SearchResult}
              options={({ route }) => ({
                headerTitle: 'Search Result',
              })}
            />
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
            <Stack.Screen name='Genres' component={Genres} />
            <Stack.Screen
              name='SingleGenre'
              component={SingleGenre}
              options={({ route }) => ({ title: route.params.genre })}
            />
            <Stack.Screen
              name='SingleView'
              component={SingleView}
              options={({ route }) => ({
                bookData: route.params.bookData,
                headerTitle: 'Discover',
                headerRight: () => <WishlistButton isWishlisted={route.params.isWishlisted} />,
                headerStyle: {
                  backgroundImage: JSON.stringify(route.params.bookData.images[0]),
                },
              })}
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
