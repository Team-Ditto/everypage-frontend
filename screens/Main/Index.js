import Search from '../Assets/Search';
import { useState, useEffect, useContext, useCallback } from 'react';
import { BOOK_STATUS } from '../../constants/index';
import { VStack, Text, Box, Button, HStack, View, Image, KeyboardAvoidingView } from 'native-base';
import { RefreshControl, ScrollView, StyleSheet, Dimensions } from 'react-native';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import FloatingButtons from '../Assets/FloatingButtons';
import { getBooksOfLoginUser } from '../../firebase/firebase-service';
import { OrangeShades, WhiteShades, BlueShades } from '../../assets/style/color';
import Filter from '../Assets/FilterSettings/Filter';
import { getBooksByKeyword } from '../../services/books-service';
import { AuthContext } from '../../contexts/AuthContext';
import { GetNotificationHeader } from '../../constants/GetNotificationHeader';
import { GetFilteredResults } from '../Assets/FilterSettings/GetFilteredResults';
import Spinner from 'react-native-loading-spinner-overlay';
import { NotificationContext } from '../../contexts/NotificationContext';

const Home = ({ navigation }) => {
  const { currentUser } = useContext(AuthContext);
  const [screenTitle, setScreenTitle] = useState(` ${currentUser.displayName}'s Library`);
  const [libData, setLibData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [bookStatus, setBookStatus] = useState('All');
  const { totalUnreadNotifications } = useContext(NotificationContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    SetTopScreenTitle();
    fetchData();
    GetNotificationHeader(navigation, totalUnreadNotifications);
  }, []);

  useEffect(() => {
    switch (bookStatus) {
      case 'All':
        setFilteredData(libData);
        break;

      case 'Private':
        setFilteredData(libData.filter(item => !item.shareable));
        break;

      case 'Borrowed':
        setFilteredData(libData.filter(item => item.owner._id !== currentUser._id));
        break;

      case 'Lent':
        setFilteredData(
          libData.filter(
            item => item.owner._id === currentUser._id && (item.bearer !== null || item.requestor !== null),
          ),
        );
        break;

      case 'Shared':
        setFilteredData(libData.filter(item => item.shareable));
        break;
    }
  }, [bookStatus]);

  function SetTopScreenTitle() {
    navigation.setOptions({
      title: screenTitle,
    });
  }

  async function fetchData() {
    getBooksOfLoginUser().then(books => {
      setLibData(books.data.results);
      setFilteredData(books.data.results);
      setSpinnerVisible(false);
    });
  }

  const BookStatusChangeHandle = () => {};

  const onSearchSubmitted = async searchText => {
    const searchedBooks = await getBooksByKeyword(searchText);
    setBookStatus(`Results for "${searchText}"`);
    console.log('searchedBooks', searchedBooks);
    setLibData(searchedBooks.data.results);
    setFilteredData(searchedBooks.data.results);
    navigation.setOptions({
      title: `Search Results`,
    });
  };

  const ApplyFilterSettings = async filterSetting => {
    let filterData = await GetFilteredResults(filterSetting);
    if (filterData !== undefined) {
      setLibData(filterData.data.results);
      setFilteredData(filterData.data.results);
    }
  };
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      fetchData();
      setRefreshing(false);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      h={{
        base: Dimensions.get('window').height - 90,
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <VStack style={{ position: 'relative', height: '100%' }}>
        {/* Search component */}
        <Box display='flex' width='100%' mt='18px' mb='10px'>
          <HStack pl={2} display='flex' justifyContent='center' alignItems='center'>
            <Search navigation={navigation} onSearchSubmitted={onSearchSubmitted} />
            <Filter ApplyFilterSettings={ApplyFilterSettings} />
          </HStack>
        </Box>
        <View style={{ height: 70 }}>
          <ScrollView
            style={{ display: 'flex', flexDirection: 'row', margin: 5 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {BOOK_STATUS.map((status, idx) => {
              return (
                <Box mx={1} mt={2} key={idx}>
                  <Button
                    p={0}
                    h={28}
                    width={84}
                    variant='unstyled'
                    borderRadius={10}
                    bg={bookStatus === status ? OrangeShades.primaryOrange : OrangeShades.quaternaryOrange}
                    _text={{ color: bookStatus === status ? WhiteShades.primaryWhite : OrangeShades.primaryOrange }}
                    style={{
                      borderWidth: 1,
                      borderColor: OrangeShades.primaryOrange,
                    }}
                    onPress={e => setBookStatus(status)}
                  >
                    {status}
                  </Button>
                </Box>
              );
            })}
          </ScrollView>
        </View>
        {/* My Library Data Collection */}

        {libData === null ? (
          <Spinner
            visible={isSpinnerVisible}
            textContent={'Loading...'}
            textStyle={{ color: '#FFF' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          />
        ) : libData.length > 0 ? (
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            {/* <Text mx={4} my={2}>
            {bookStatus} ({filteredData.length})
          </Text> */}
            <ScrollView>
              <Box py={3} px={2} w='100%' mb={20} flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
                {filteredData ? (
                  filteredData.map((data, id) => {
                    return <MyLibraryCard key={id} data={data} navigation={navigation} />;
                  })
                ) : (
                  <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
                )}
              </Box>
            </ScrollView>
          </ScrollView>
        ) : (
          <ScrollView>
            <View style={styles.container}>
              <Box height='80px' position='relative' bottom='30px'>
                <Image alt='dropDown' source={require('../../assets/logo-no-text.png')} />
              </Box>
              <Text style={styles.text}>Hi {currentUser.displayName}, welcome to everypage!</Text>
              <Text style={styles.content}>
                Now that you have your digital bookshelf setup. Let's add some books to your Library
              </Text>
            </View>
            <Image style={styles.downArrow} alt='Down arrow' source={require('../../assets/DownwardArrow.png')} />
          </ScrollView>
        )}
        <FloatingButtons navigation={navigation} />
      </VStack>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  buttons: {
    borderColor: '#DC924D',
    borderWidth: 2,
    backgroundColor: '#FDF5EA',
    color: '#DC924D',
  },
  buttonsClick: {
    borderColor: '#DC924D',
    color: 'white',
  },
  container: {
    backgroundColor: BlueShades.tertiaryBlue,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 30,
  },
  text: {
    width: '100%',
    fontSize: 24,
    padding: 10,
    lineHeight: 30,
  },
  content: {
    width: '100%',
    fontSize: 16,
    padding: 10,
    lineHeight: 30,
  },
  downArrow: {
    position: 'absolute',
    bottom: 8,
    right: 50,
  },
});

export default Home;
