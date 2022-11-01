import { View, Text } from 'react-native';
import React from 'react';
import Location from '../Assets/Location';
import SearchSortFilter from '../Assets/SearchSortFilter';
import WelcomeScreen from '../Assets/WelcomeScreen';
import RecentSearch from '../Assets/RecentSearch';
import SearchResult from '../Assets/SearchResult';

export default function Profile() {
  return (
    <View>
      {/* <Text>Profile</Text> */}
      <RecentSearch />
      {/* <SearchResult /> */}
    </View>
  );
}
