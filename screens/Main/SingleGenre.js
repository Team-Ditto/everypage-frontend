import { useState, useEffect } from 'react';
import { VStack, Text, Box, ScrollView } from 'native-base';
import Search from '../Assets/Search';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { LibraryData } from '../../constants/LibraryData';
import { getUsersBook } from '../../services/books-service';

const SingleGenre = ({ navigation, route }) => {
  const [searchResults, setSearchResults] = useState(LibraryData);
  // const [genre, set]

  useEffect(() => {
    async function fetchData() {
      const params = {
        genre: '',
        readingStatus: '',
      };
      console.log(route.params.genre);
      getUsersBook(route.params.genre, 'To Read').then(books => {
        setSearchResults(books.data.results);
        // setSpinnerVisible(false);
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <VStack margin={2}>
        <Search />
        <Text px={2} pt={2}>
          {searchResults.length} Books
        </Text>
        <ScrollView>
          <Box py={3} px={2} w='100%' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
            {searchResults.map((r, id) => {
              return <MyLibraryCard key={id} data={r} navigation={navigation} showWishListIcon={true} />;
            })}
          </Box>
        </ScrollView>
      </VStack>
    </>
  );
};

export default SingleGenre;
