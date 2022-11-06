import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IndexScreen from '../screens/IndexScreen';
import Discover from '../screens/Main/Discover';
import Wishlist from '../screens/Main/Wishlist';
import Profile from '../screens/User/Profile';
import Community from '../screens/Main/Community';
import Notifications from '../screens/Main/Notifications';
import { MaterialIcons, AntDesign, Fontisto, FontAwesome } from '@expo/vector-icons';
import Map from '../screens/Assets/Map';
export default function TabStack() {
  const TabNavigator = createBottomTabNavigator();
  const screenOptions = {
    tabBarStyle: {
      padding: 5,
      height: 90,
    },
  };
  return (
    <TabNavigator.Navigator screenOptions={screenOptions}>
      <TabNavigator.Screen
        name='Home'
        component={IndexScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => <MaterialIcons name='library-books' size={34} />,
        })}
      />
      <TabNavigator.Screen
        name='Wishlist'
        component={Wishlist}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => <MaterialIcons name='favorite' size={34} color='black' />,
        })}
      />
      <TabNavigator.Screen
        name='Discover'
        component={Discover}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => <Fontisto name='world-o' size={34} color='black' />,
        })}
      />
      <TabNavigator.Screen
        name='Community'
        component={Community}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => <FontAwesome name='users' size={24} color='black' />,
        })}
      />
      <TabNavigator.Screen
        name='Profile'
        component={Profile}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => <AntDesign name='user' size={34} color='black' />,
        })}
      />
      <TabNavigator.Screen
        name='Notifications'
        component={Notifications}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => <AntDesign name='user' size={34} color='black' />,
        })}
      />
    </TabNavigator.Navigator>
  );
}
