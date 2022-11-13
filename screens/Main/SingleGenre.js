import { useState, useEffect } from 'react';
import { VStack, Text, Box, ScrollView } from 'native-base';
import Search from '../Assets/Search';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { getUsersBook } from '../../services/books-service';

const SingleGenre = ({ navigation, route }) => {
  const [searchResults, setSearchResults] = useState([]);

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
