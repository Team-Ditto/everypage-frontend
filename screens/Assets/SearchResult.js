import { Input, Box, Icon, IconButton, HStack, View, Text, VStack } from 'native-base';
import { ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { LibraryData } from '../../constants/LibraryData';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import Search from './Search';

const SearchResult = ({ route, navigation }) => {
  const [libData, setLibData] = useState(LibraryData);

  return (
    <Box display='flex' width='100%' mt={2}>
      <Search navigation={navigation} searchField={route.params.searchText} />
      <Text mx={2} my={2}>
        Result for {route.params.searchText} ({libData.length})
      </Text>
      <ScrollView>
        <Box py={3} px={2} w='100%' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
          {libData.map((data, id) => {
            return <MyLibraryCard key={id} data={data} navigation={navigation} />;
          })}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SearchResult;
