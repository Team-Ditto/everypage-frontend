import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IndexScreen from '../screens/IndexScreen';
import Discover from '../screens/Main/Discover';
import Wishlist from '../screens/Main/Wishlist';
import Profile from '../screens/User/Profile';
import Community from '../screens/Main/Community';
import MyLibraryIcon from '../assets/navigation-icons/library.png';
import MyLibraryIconActive from '../assets/navigation-icons/library_active.png';
import WishlistIcon from '../assets/navigation-icons/wishlist.png';
import WishlistIconActive from '../assets/navigation-icons/wishlist_active.png';
import DiscoverIcon from '../assets/navigation-icons/discover.png';
import DiscoverIconActive from '../assets/navigation-icons/discover_active.png';
import CommunityIcon from '../assets/navigation-icons/community.png';
import CommunityIconActive from '../assets/navigation-icons/community_active.png';
import ProfileIcon from '../assets/navigation-icons/profile.png';
import ProfileIconActive from '../assets/navigation-icons/profile_active.png';

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
          tabBarIcon: ({ focused }) => <Image source={focused ? MyLibraryIconActive : MyLibraryIcon} size={34} />,
        })}
      />

      <TabNavigator.Screen
        name='Wishlist'
        style={style.buttonClick}
        component={Wishlist}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <Image source={focused ? WishlistIconActive : WishlistIcon} size={34} />,
        })}
      />
      {/* <MaterialIcons name='favorite' size={34} color='black' /> */}
      <TabNavigator.Screen
        name='Discover'
        component={Discover}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <Image source={focused ? DiscoverIconActive : DiscoverIcon} size={34} />,
        })}
        // <Fontisto name='world-o' size={34} color={} />
      />
      <TabNavigator.Screen
        name='Community'
        component={Community}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <Image source={focused ? CommunityIconActive : CommunityIcon} size={24} />,
        })}
        // <FontAwesome name='users' size={24} color='#DC924c' />,
      />
      <TabNavigator.Screen
        name='Profile'
        component={Profile}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <Image source={focused ? ProfileIconActive : ProfileIcon} size={34} />,
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
