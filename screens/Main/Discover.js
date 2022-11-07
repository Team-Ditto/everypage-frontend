import React, { useState, useEffect } from 'react';
import Search from '../Assets/Search';
import { Box, Text, Button, ScrollView, VStack, HStack, Icon, Pressable, Image, View, Divider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { LibraryData, genreDiscover } from '../../constants/LibraryData';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { Circle } from 'react-native-svg';
import { getUsersBook } from '../../services/books-service';
import Filter from '../Assets/FilterSettings/Filter';
import { GetNotificationHeader } from '../../constants/GetNoticationHeader';

export default function Discover({ navigation }) {
  const [similarBookData, setSimilarBookData] = useState(LibraryData);
  const [isFilterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const params = {
        genre: '',
        readingStatus: '',
      };
      getUsersBook().then(books => {
        setSimilarBookData(books.data.results);
        // setSpinnerVisible(false);
      });
    }
    fetchData();
    GetNotificationHeader(navigation);
  }, []);
  const onFilterClicked = () => {
    setFilterVisible(!isFilterVisible);
  };
  return (
    <VStack>
      {/* Search component */}
      <Box display='flex' width='100%' mt='18px' mb='10px'>
        <HStack pl={2} display='flex' justifyContent='center' alignItems='center'>
          <Search navigation={navigation} onFilterClicked={onFilterClicked} />
          <Filter isFromDiscover={true} />
        </HStack>
      </Box>
      {/* Genre Generation */}
      <HStack px={2} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text m={0} style={{ fontWeight: 'semi-bold', fontSize: 16 }}>
          Genre
        </Text>
        <Button
          variant='unstyled'
          p={0}
          endIcon={<Icon as={MaterialIcons} name='keyboard-arrow-right' />}
          onPress={() => {
            navigation.navigate('Genres');
          }}
          style={{ fontWeight: 'semi-bold', fontSize: 16 }}
        >
          view all
        </Button>
      </HStack>

      <ScrollView
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 5,
          paddingBottom: 120,
        }}
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
      <Divider shadow={1} />
      {/* View below the Genre Tab */}

      <ScrollView>
        <Text m={2} fontWeight='bold' fontSize='2xl'>
          Books you might like
        </Text>
        <Box py={3} px={2} mb={20} w='100%' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
          {similarBookData.map((data, id) => {
            return <MyLibraryCard key={id} data={data} navigation={navigation} showWishListIcon={true} />;
          })}
        </Box>
      </ScrollView>
    </VStack>
  );
}
