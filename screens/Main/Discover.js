import { useState, useEffect } from 'react';
import Search from '../Assets/Search';
import { Box, Text, Button, ScrollView, VStack, HStack, Icon, Pressable, Image, View } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { LibraryData, genreDiscover } from '../../constants/LibraryData';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { getUsersBook } from '../../services/books-service';
import Filter from '../Assets/FilterSettings/Filter';
import { GetNotificationHeader } from '../../constants/GetNoticationHeader';
import { GetFilteredResults } from '../Assets/FilterSettings/GetFilteredResults';

export default function Discover({ navigation }) {
  const [similarBookData, setSimilarBookData] = useState(LibraryData);
  const [isFilterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const params = {
        genre: '',
        readingStatus: '',
      };

      let booksData = await getUsersBook();
      if (booksData !== undefined && booksData.data.results.length > 0) {
        setSimilarBookData(booksData.data.results);
      }
    }
    fetchData();
    GetNotificationHeader(navigation);
  }, []);
  const onFilterClicked = () => {
    setFilterVisible(!isFilterVisible);
  };

  const ApplyFilterSettings = async filterSetting => {
    console.log(filterSetting);
    let filterData = await GetFilteredResults(filterSetting, true);
    if (filterData !== undefined) {
      setSimilarBookData(filterData.data.results);
    }
  };
  return (
    <VStack style={{ height: '100%' }}>
      {/* Search component */}
      <Box display='flex' width='100%' mt={2}>
        <HStack display='flex' justifyContent='center' alignItems='center'>
          <Search navigation={navigation} onFilterClicked={onFilterClicked} />
          <Filter ApplyFilterSettings={ApplyFilterSettings} isFromDiscover={true} />
        </HStack>
      </Box>
      {/* Genre Generation */}
      <HStack style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text m={2} fontSize='md'>
          Genre
        </Text>
        <Button
          variant='unstyled'
          endIcon={<Icon as={MaterialIcons} name='keyboard-arrow-right' size='md' />}
          onPress={() => {
            navigation.navigate('Genres');
          }}
        >
          View All
        </Button>
      </HStack>

      <View style={{ height: 90 }}>
        <ScrollView
          style={{ display: 'flex', flexDirection: 'row', margin: 5 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          h='105px'
        >
          {genreDiscover.map((data, idx) => {
            return (
              <Box mx={1} key={idx} h={60}>
                <Pressable
                  justifyContent='space-between'
                  onPress={() => {
                    navigation.navigate('SingleGenre', { genre: data.genre });
                  }}
                >
                  <Image source={data.icon} w='64px' h='64px' alt={data.genre} />
                  <Text w='70px' flexWrap='wrap' textAlign='center'>
                    {data.genre}
                  </Text>
                </Pressable>
              </Box>
            );
          })}
        </ScrollView>
      </View>

      {/* View below the Genre Tab */}

      <Text m={2} fontWeight='bold' fontSize='2xl'>
        Books you might like
      </Text>

      <ScrollView>
        <Box py={3} px={2} mb={20} w='100%' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
          {similarBookData.map((data, id) => {
            return <MyLibraryCard key={id} data={data} navigation={navigation} showWishListIcon={true} />;
          })}
        </Box>
      </ScrollView>
    </VStack>
  );
}
