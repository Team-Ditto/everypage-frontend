import { VStack, Text, Box, Button, Spinner, HStack, View, Image } from 'native-base';
import Search from '../Assets/Search';
import { ScrollView, StyleSheet } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { WelcomeScreen } from '../Assets/WelcomeScreen';
import { LibraryData } from '../../constants/LibraryData';
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

const Home = ({ navigation, user }) => {
  const [libData, setLibData] = useState([]);
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [bookStatus, setBookStatus] = useState('All');
  const [textStyle, setTextStyle] = useState('');
  const [toggle, setToggle] = useState(false);

  const genreData = ['Art', 'Crime', 'Fiction', 'Biology', 'Art', 'Crime', 'Fiction', 'Biology'];
  useEffect(() => {
    async function fetchData() {
      getBooksOfLoginUser().then(books => {
        setLibData(books.data);
        setSpinnerVisible(false);
      });
    }
    fetchData();
  }, []);

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
              <Button
                px={5}
                borderRadius='md'
                onPress={() => setBookStatus(status)}
                onTouchEnd={() => setToggle(!toggle)}
                style={{
                  backgroundColor: toggle ? '#DC924D' : '#FDF5EA',
                  border: ' #DC924D',
                }}
              >
                <Text
                  style={{
                    color: toggle ? 'white' : '#DC924D',
                  }}
                >
                  {status}
                </Text>
              </Button>
            </Box>
          );
        })}
      </ScrollView>

      {/* My Library Data Collection */}

      {libData.length > 0 ? (
        <Box>
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
        </Box>
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Image source={require('../../assets/dropdown.png')} />
            <Text style={styles.text}>Hi Mita, welcome to everypage!</Text>
            <Text style={styles.content}>
              Now that you have your digital bookshelf setup. Let's addsome books to your Library
            </Text>
          </View>
          <Image style={styles.downArrow} source={require('../../assets/DownwardArrow.png')} />
        </ScrollView>
      )}
      <FloatingButtons navigation={navigation} />
    </VStack>
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
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
    borderRadius: 10,
    padding: 30,
  },
  text: {
    fontSize: 30,
    padding: 10,
    lineHeight: 30,
  },
  content: {
    fontSize: 18,
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
