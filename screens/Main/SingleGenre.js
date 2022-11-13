import { useState, useEffect } from 'react';
import { VStack, Text, Box, ScrollView, HStack } from 'native-base';
import Search from '../Assets/Search';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { LibraryData } from '../../constants/LibraryData';
import { getBooksByKeyword, getUsersBook } from '../../services/books-service';
import { Alert } from 'react-native';

const SingleGenre = ({ navigation, route }) => {
  const [searchResults, setSearchResults] = useState([]);
  // const [genre, set]

  const onSearchSubmitted = async searchText => {
    // const searchedBooks = await getBooksByKeyword(searchText);
    // // setBookStatus(`Results for "${searchText}"`);
    // setSearchResults(searchedBooks.data.results);
    // navigation.setOptions({
    //   title: `Search Results`,
    // });
    // Alert('Still Working on it');
    alert(`Still Working on search for "${searchText}"`);
  };

  useEffect(() => {
    async function fetchData() {
      const params = {
        genre: '',
        readingStatus: '',
      };
      console.log(route.params.genre);
      let queryParams = `?page=1&perPage=5&sortBy=createdAt&sortOrder=asc`;
      let books = await getUsersBook(queryParams, route.params.genre, '', '', true);
      // getUsersBook(queryParams, route.params.genre,route.params.readingStatus '', '', true).then(books => {
      console.log('Books Count', books.data.results.length);
      setSearchResults(books.data.results);
      // setSpinnerVisible(false);
      // });
    }
    fetchData();
  }, []);

  return (
    <>
      <VStack margin={2} style={{ height: '100%' }}>
        <Box display='flex' width='100%' mt={2}>
          <HStack display='flex' justifyContent='center' alignItems='center'>
            <Search navigation={navigation} onSearchSubmitted={onSearchSubmitted} />
            {/* <Filter ApplyFilterSettings={ApplyFilterSettings} /> */}
          </HStack>
        </Box>
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
