import { VStack, Text, Box, Button, Spinner, HStack } from 'native-base';
import Search from '../Assets/Search';
import { ScrollView } from 'react-native';
import { useState } from 'react';

import { LibraryData } from '../../constants/LibraryData';
import { BOOK_STATUS } from '../../constants/index';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import FloatingButtons from '../Assets/FloatingButtons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../contexts/AuthContext';
import {
  getAllBooksForTheUser,
  getBooksOfLoginUser,
  signUpWithEmailAndPassword,
} from '../../firebase/firebase-service';
import { getBookAsPerUser } from '../../services/users-service';
import axios from 'axios';
import { LOCAL_BASE_URL, REQUEST_TIMEOUT } from '../../services/api-config';
import { async } from '@firebase/util';
import { BOOK_STATUS } from '../../constants/index';
import { BlueShades, OrangeShades } from '../../assets/style/color';
import Fliter from '../Assets/FilterSettings/Fliter';

const Home = ({ navigation }) => {
  const [libData, setLibData] = useState(LibraryData);
  const [bookStatus, setBookStatus] = useState('All');
  const [isFilterVisible, setFilterVisible] = useState(false);
  const genreData = ['Art', 'Crime', 'Fiction', 'Biology', 'Art', 'Crime', 'Fiction', 'Biology'];
  useEffect(() => {
    async function fetchData() {
      getBooksOfLoginUser().then(books => {
        setLibData(books.data.results);
        setSpinnerVisible(false);
      });
    }
    fetchData();
  }, []);

  const BookStatusChangeHandle = () => {};

  const onFilterClicked = () => {
    setFilterVisible(!isFilterVisible);
  };

  const setFilterState = state => {
    setFilterVisible(state);
  };
  return (
    <VStack>
      {/* Search component */}
      <Box display='flex' width='100%' mt={2}>
        <HStack display='flex' justifyContent='center' alignItems='center'>
          <Search navigation={navigation} onFilterClicked={onFilterClicked} />
          <Fliter />
        </HStack>
      </Box>
      {/* button slider */}
      <ScrollView
        style={{ display: 'flex', flexDirection: 'row', margin: 5 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {BOOK_STATUS.map((status, idx) => {
          return (
            <Box mx={1} mt={2} key={idx} h={60} width={120}>
              <Button
                px={2}
                variant='unstyled'
                borderRadius={100}
                bg={OrangeShades.quaternaryOrange}
                _text={{ color: OrangeShades.primaryOrange }}
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

      {/* My Library Data Collection */}
      <Text mx={2} my={2}>
        {bookStatus} ({libData.length})
      </Text>
      <ScrollView>
        <Box py={3} px={2} w='100%' flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
          {libData === 'undefined' || null ? (
            <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
          ) : (
            libData.map((data, id) => {
              return <MyLibraryCard key={id} data={data} navigation={navigation} />;
            })
          )}
        </Box>
      </ScrollView>
      <FloatingButtons navigation={navigation} />
    </VStack>
  );
};

export default Home;
