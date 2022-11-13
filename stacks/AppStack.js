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
import { BlueShades, WhiteShades } from '../assets/style/color';
import ReaderInfo from '../screens/User/ReaderInfo';
import Genres from '../screens/Main/Genres';
import SingleGenre from '../screens/Main/SingleGenre';
import SingleView from '../screens/Cards/Discover/SingleView';
import WishlistButton from '../screens/Assets/WishlistButton';
import { AuthContext } from '../contexts/AuthContext';
import SearchResult from '../screens/Assets/SearchResult';
import Notifications from '../screens/Main/Notifications';
import WelcomeScreen from '../screens/Assets/WelcomeScreen';
import KnowMore from '../screens/Assets/KnowMore';
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const { currentUser } = useContext(AuthContext);

  return (
    // <Provider store={reduxStore}>
    <NavigationContainer>
      <Stack.Navigator initialRoute='Login'>
        {currentUser ? (
          currentUser.firstTimeLogin ? (
            <>
              <Stack.Screen
                name='Location'
                component={Location}
                options={{
                  headerStyle: {
                    backgroundColor: BlueShades.primaryBlue,
                  },
                  cardStyle: { backgroundColor: BlueShades.primaryBlue },
                  headerTintColor: WhiteShades.primaryWhite,
                }}
              />
              <Stack.Screen
                name='ReaderInfo'
                component={ReaderInfo}
                options={{
                  headerStyle: {
                    backgroundColor: BlueShades.primaryBlue,
                  },
                  cardStyle: { backgroundColor: BlueShades.primaryBlue },
                  headerTintColor: WhiteShades.primaryWhite,
                }}
              />
            </>
          ) : (
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
                  bookId: route.params.bookId,
                  headerTitle: 'Discover',
                  headerRight: () => <WishlistButton isWishlisted={route.params.isWishlisted} />,
                })}
              />
              <Stack.Screen
                name='Notifications'
                component={Notifications}
                options={({ route }) => ({
                  tabBarIcon: ({ color, size }) => <AntDesign name='user' size={34} color='black' />,
                })}
              />
            </>
          )
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
                headerTintColor: WhiteShades.primaryWhite,
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
                headerTintColor: WhiteShades.primaryWhite,
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
