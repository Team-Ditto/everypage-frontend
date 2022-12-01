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

import { AuthContext } from '../contexts/AuthContext';
import SearchResult from '../screens/Assets/SearchResult';
import Notifications from '../screens/Main/Notifications';
import WishlistTopIcon from '../screens/Assets/WishlistTopIcon';
import Chat from '../screens/Chats/Chat';
import ChatHeaderTitle from '../screens/Chats/ChatHeaderTitle';

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
                    fontFamily: 'Quicksand',
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
                    fontFamily: 'Quicksand',
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
                  headerTintStyle: {
                    fontFamily: 'Quicksand',
                  },
                })}
              />
              <Stack.Screen name='Genres' component={Genres} />
              <Stack.Screen
                name='SingleGenre'
                component={SingleGenre}
                options={({ route }) => ({
                  title: route.params.genre,
                  headerTitleStyle: {
                    fontFamily: 'Quicksand',
                  },
                })}
              />
              <Stack.Screen
                name='SingleView'
                component={SingleView}
                options={({ route }) => ({
                  headerTitle: 'Discover',
                  headerTitleStyle: {
                    fontFamily: 'Quicksand',
                  },
                  headerRight: () => <WishlistTopIcon data={{ _id: route.params.bookId }} />,
                })}
              />
              <Stack.Screen
                name='Notifications'
                component={Notifications}
                options={({ route }) => ({
                  headerTitleStyle: {
                    fontFamily: 'Quicksand',
                  },
                  tabBarIcon: ({ color, size }) => <AntDesign name='user' size={34} color='black' />,
                })}
              />
              <Stack.Screen
                name='Chat'
                component={Chat}
                options={{
                  headerBackTitleVisible: false,
                  headerStyle: { height: 96 },
                  headerTitleStyle: {
                    fontFamily: 'Quicksand',
                  },
                  headerTitle: props => <ChatHeaderTitle {...props} />,
                }}
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
                headerTitleStyle: {
                  fontFamily: 'Quicksand',
                },
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
                headerTitleStyle: {
                  fontFamily: 'Quicksand',
                },
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
