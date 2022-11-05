import { FormControl, Stack, Input, TextArea, Button, Box, VStack } from 'native-base';
import { useContext, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { BlueShades, whiteShades } from '../../../assets/style/color';
import { AuthContext } from '../../../contexts/AuthContext';
import { addBookForUser } from '../../../firebase/firebase-service';
import { addBook } from '../../../services/books-service';
import BookDetail from './BookDetails';
import ReadingStatus from './ReadingStatus';

const AddBook = ({ route, navigation }) => {
  let routeBookData = undefined;
  if (route.params !== undefined && route.params.book !== undefined) {
    routeBookData = route.params.book; // eslint-disable-line react/prop-types
  }
  const [bookObj, setBookObj] = useState({
    title: routeBookData === undefined ? '' : routeBookData.volumeInfo.title, // eslint-disable-line react/prop-types
    author: routeBookData === undefined ? '' : routeBookData.volumeInfo.authors[0], // eslint-disable-line react/prop-types
    images: [],
    language: routeBookData === undefined ? '' : routeBookData.volumeInfo.language, // eslint-disable-line react/prop-types
    genre: '',
    edition: '',
    ISBN: route.params === undefined ? '' : route.params.ISBN, // eslint-disable-line react/prop-types
    bookCondition: '',
    readingStatus: '',
    location: '',
    shareable: false,
    notes: routeBookData === undefined ? '' : routeBookData.volumeInfo.description, // eslint-disable-line react/prop-types
  });

  const handleSaveBtn = async () => {
    try {
      let responseBook = await addBook(bookObj);
      alert('Book added.');
      // navigation.navigate('BottomTab');
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return (
    <VStack bg='muted.50' padding={3}>
      <ScrollView>
        <FormControl required>
          <FormControl.Label color='black'>TITLE</FormControl.Label>
          <Input
            borderWidth={0}
            style={styles.inputStyle}
            borderRadius={10}
            value={bookObj.title} // eslint-disable-line react/prop-types
            onChangeText={text => {
              setBookObj(prevState => ({ ...prevState, title: text }));
            }}
          />
        </FormControl>
        <FormControl required my={2}>
          <FormControl.Label>AUTHOR</FormControl.Label>
          <Input
            borderWidth={0}
            style={styles.inputStyle}
            borderRadius={10}
            value={bookObj.author} // eslint-disable-line react/prop-types
            onChangeText={text => {
              setBookObj(prevState => ({ ...prevState, author: text }));
            }}
          />
        </FormControl>
        <BookDetail bookObj={bookObj} setBookObj={setBookObj} />
        <ReadingStatus bookObj={bookObj} setBookObj={setBookObj} />
        <FormControl my={2} mt={4}>
          <FormControl.Label>ADDITIONAL INFORMAITON</FormControl.Label>
          <TextArea
            placeholder='Note'
            height={30}
            borderWidth={0}
            borderRadius={10}
            value={bookObj.notes} // eslint-disable-line react/prop-types
            bg={BlueShades.tertiaryBlue}
            onChangeText={text => {
              setBookObj(prevState => ({ ...prevState, notes: text }));
            }}
          />
        </FormControl>
        <Button onPress={handleSaveBtn} my={2} bg={BlueShades.primaryBlue} _text={{ color: whiteShades.primaryWhite }}>
          Save
        </Button>
      </ScrollView>
    </VStack>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: BlueShades.tertiaryBlue,
    fontSize: '16',
    borderWidth: 0,
  },
});

export default AddBook;
