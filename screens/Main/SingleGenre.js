import { useState, useEffect } from 'react';
import { VStack, Text, Box, ScrollView, HStack, KeyboardAvoidingView } from 'native-base';
import { Dimensions } from 'react-native';
import Search from '../Assets/Search';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { getUsersBook } from '../../services/books-service';

const SingleGenre = ({ navigation, route }) => {
  const [searchResults, setSearchResults] = useState([]);

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

      let queryParams = `?page=1&perPage=5&sortBy=createdAt&sortOrder=asc&genre=${route.params.genre}`;
      let booksData = await getUsersBook(queryParams, '', '', '', true);
      if (booksData !== undefined && booksData.data.results.length > 0) {
        setSearchResults(booksData.data.results);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        h={{
          base: Dimensions.get('window').height - 90,
          lg: 'auto',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
      </KeyboardAvoidingView>
    </>
  );
};

export default SingleGenre;
