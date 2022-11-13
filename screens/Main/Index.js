import { VStack, Text, Box, Button, Spinner, HStack, View } from 'native-base';
import Search from '../Assets/Search';
import { ScrollView } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { BOOK_STATUS } from '../../constants/index';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import FloatingButtons from '../Assets/FloatingButtons';
import { getBooksOfLoginUser } from '../../firebase/firebase-service';
import { OrangeShades, WhiteShades } from '../../assets/style/color';
import Filter from '../Assets/FilterSettings/Filter';
import { getBooksByKeyword } from '../../services/books-service';
import { AuthContext } from '../../contexts/AuthContext';
import { GetNotificationHeader } from '../../constants/GetNoticationHeader';
import { GetFilteredResults } from '../Assets/FilterSettings/GetFilteredResults';

const Home = ({ navigation }) => {
  const { currentUser } = useContext(AuthContext);
  const [screenTitle, setScreenTitle] = useState(` ${currentUser.displayName}'s Library`);
  const [libData, setLibData] = useState([]);
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [bookStatus, setBookStatus] = useState('All');
  useEffect(() => {
    SetTopScreenTitle();
    fetchData();
    GetNotificationHeader(navigation);
  }, []);

  function SetTopScreenTitle() {
    navigation.setOptions({
      title: screenTitle,
    });
  }

  async function fetchData() {
    getBooksOfLoginUser().then(books => {
      setLibData(books.data.results);
      setSpinnerVisible(false);
    });
  }

  const BookStatusChangeHandle = () => {};

  const onSearchSubmitted = async searchText => {
    const searchedBooks = await getBooksByKeyword(searchText);
    setBookStatus(`Results for "${searchText}"`);
    setLibData(searchedBooks.data.results);

    navigation.setOptions({
      title: `Search Results`,
    });
  };

  const ApplyFilterSettings = async filterSetting => {
    let filterData = await GetFilteredResults(filterSetting);
    if (filterData !== undefined) {
      setLibData(filterData.data.results);
    }
  };

  return (
    <VStack style={{ position: 'relative', height: '100%' }}>
      {/* Search component */}
      <Box display='flex' width='100%' mt={2}>
        <HStack display='flex' justifyContent='center' alignItems='center'>
          <Search navigation={navigation} onSearchSubmitted={onSearchSubmitted} />
          <Filter ApplyFilterSettings={ApplyFilterSettings} />
        </HStack>
      </Box>
      {/* button slider */}
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
      {/* <Text mx={2} my={2} fontWeight='bold'>
        {bookStatus} ({libData.length})
      </Text> */}
      <ScrollView>
        <Box py={0} px={2} w='100%' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
          {libData ? (
            libData.map((data, id) => {
              switch (bookStatus) {
                case 'All':
                  return <MyLibraryCard key={id} data={data} navigation={navigation} />;
                  break;
                case 'Private':
                  if (!data.shareable) {
                    return <MyLibraryCard key={id} data={data} navigation={navigation} />;
                  }
                  break;
                case 'Borrowed':
                  if (data.owner._id !== currentUser._id) {
                    return <MyLibraryCard key={id} data={data} navigation={navigation} />;
                  }
                  break;
                case 'Lent':
                  if (data.bearer !== null || data.requestor !== null) {
                    return <MyLibraryCard key={id} data={data} navigation={navigation} />;
                  }
                  break;
                case 'Shared':
                  if (data.shareable) {
                    return <MyLibraryCard key={id} data={data} navigation={navigation} />;
                  }
                  break;
              }
            })
          ) : (
            <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
          )}
        </Box>
      </ScrollView>
      <FloatingButtons navigation={navigation} />
    </VStack>
  );
};

export default Home;
