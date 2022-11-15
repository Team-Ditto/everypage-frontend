import { useState, useEffect } from 'react';
import Search from '../Assets/Search';
import {
  Box,
  Text,
  Button,
  ScrollView,
  VStack,
  HStack,
  Icon,
  Pressable,
  Image,
  Divider,
  View,
  KeyboardAvoidingView,
} from 'native-base';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { genreDiscover } from '../../constants/LibraryData';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { getUsersBook } from '../../services/books-service';
import Filter from '../Assets/FilterSettings/Filter';
import { GetNotificationHeader } from '../../constants/GetNotificationHeader';
import { GetFilteredResults } from '../Assets/FilterSettings/GetFilteredResults';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Discover({ navigation }) {
  const [similarBookData, setSimilarBookData] = useState([]);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // const params = {
      //   genre: '',
      //   readingStatus: '',
      // };

      let queryParams = `?page=1&perPage=20&sortBy=createdAt&sortOrder=asc`;
      let booksData = await getUsersBook(queryParams, '', '', '', true);

      if (booksData !== undefined && booksData.data.results.length > 0) {
        setSimilarBookData(booksData.data.results);
        setFilterVisible(false);
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
    <KeyboardAvoidingView
      h={{
        base: Dimensions.get('window').height - 90,
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <VStack style={{ height: '100%' }}>
        {/* Search component */}
        <Box display='flex' width='100%' mt='18px' mb='10px'>
          <HStack pl={2} display='flex' justifyContent='center' alignItems='center'>
            <Search navigation={navigation} onFilterClicked={onFilterClicked} />
            <Filter ApplyFilterSettings={ApplyFilterSettings} isFromDiscover={true} />
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
          {Object.keys(similarBookData).length > 0 ? (
            <>
              <Text m={2} fontWeight='bold' fontSize='2xl'>
                Books you might like
              </Text>
              <Box py={3} px={2} w='100%' mb={20} flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
                {similarBookData.map((data, id) => {
                  return <MyLibraryCard key={id} data={data} navigation={navigation} showWishListIcon={true} />;
                })}
              </Box>
            </>
          ) : (
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
            </View>
          )}
        </ScrollView>
      </VStack>
    </KeyboardAvoidingView>
  );
}
