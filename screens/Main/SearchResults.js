import { VStack, Text, Box, ScrollView } from 'native-base';
import Search from '../Assets/Search';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { LibraryData } from '../../constants/LibraryData';
import { useState } from 'react';

const SearchResults = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState(LibraryData);
  return (
    <>
      <VStack>
        <Search />
        <Text>{searchResults.length} Books</Text>
        <ScrollView>
          <Box py={3} px={2} w='100%' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
            {searchResults.map(r => {
              return <MyLibraryCard key={id} data={r} navigation={navigation} showWishListIcon={true} />;
            })}
          </Box>
        </ScrollView>
      </VStack>
    </>
  );
};

export default SearchResults;
