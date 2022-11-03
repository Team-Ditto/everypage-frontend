import { VStack, Text, Box, Button, Spinner } from 'native-base';
import Search from '../Assets/Search';
import { ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import FloatingButtons from '../Assets/FloatingButtons';
import { getBooksOfLoginUser } from '../../firebase/firebase-service';
import { BOOK_STATUS } from '../../constants/index';

const Home = ({ navigation }) => {
  const [libData, setLibData] = useState([]);
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [bookStatus, setBookStatus] = useState('All');

  useEffect(() => {
    async function fetchData() {
      getBooksOfLoginUser().then(books => {
        setLibData(books.data);
        setSpinnerVisible(false);
      });
    }
    fetchData();
  }, []);

  const BookStatusChangeHandle = () => {};

  return (
    <VStack>
      {/* Search component */}
      <Search navigation={navigation} />
      {/* button slider */}
      <ScrollView
        style={{ display: 'flex', flexDirection: 'row', margin: 5 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {BOOK_STATUS.map((status, idx) => {
          return (
            <Box mx={1} key={idx} h='55px' width='120px'>
              <Button px={5} borderRadius='md' onPress={e => setBookStatus(status)}>
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
