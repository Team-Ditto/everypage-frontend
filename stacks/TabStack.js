import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IndexScreen from '../screens/IndexScreen';
import Discover from '../screens/Main/Discover';
import Wishlist from '../screens/Main/Wishlist';
import Profile from '../screens/User/Profile';
import Community from '../screens/Main/Community';
import { MyLibrarIcon, CommunIcon, DiscovIcon, ProfIcon, WishlIcon } from '../screens/Assets/SvgIcon';

import { BlueShades, OrangeShades } from '../assets/style/color';
export default function TabStack() {
  const TabNavigator = createBottomTabNavigator();
  const screenOptions = {
    tabBarStyle: {
      padding: 5,
      height: 90,
    },
    tabBarActiveTintColor: OrangeShades.primaryOrange,
    tabBarInactiveTintColor: BlueShades.primaryBlue,
  };

  return (
    <TabNavigator.Navigator screenOptions={screenOptions}>
      <TabNavigator.Screen
        name='Home'
        component={IndexScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <MyLibrarIcon color={focused ? OrangeShades.primaryOrange : BlueShades.primaryBlue} />
          ),
        })}
      />

      <TabNavigator.Screen
        name='Wishlist'
        style={style.buttonClick}
        component={Wishlist}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <WishlIcon color={focused ? OrangeShades.primaryOrange : BlueShades.primaryBlue} />
          ),
        })}
      />
      {/* <MaterialIcons name='favorite' size={34} color='black' /> */}
      <TabNavigator.Screen
        name='Discover'
        component={Discover}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <DiscovIcon color={focused ? OrangeShades.primaryOrange : BlueShades.primaryBlue} />
          ),
        })}
        // <Fontisto name='world-o' size={34} color={} />
      />
      <TabNavigator.Screen
        name='Community'
        component={Community}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <CommunIcon color={focused ? OrangeShades.primaryOrange : BlueShades.primaryBlue} />
          ),
        })}
        // <FontAwesome name='users' size={24} color='#DC924c' />,
      />
      <TabNavigator.Screen
        name='Profile'
        component={Profile}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <ProfIcon color={focused ? OrangeShades.primaryOrange : BlueShades.primaryBlue} />
          ),
        })}
        // <AntDesign name='user' size={34} color='#DC924c' />
      />
    </TabNavigator.Navigator>
  );
}
const style = StyleSheet.create({
  buttonClick: {
    color: '#DC924C',
  },
  button: {
    color: 'blue',
  },
});
