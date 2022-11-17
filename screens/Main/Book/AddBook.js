import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FormControl, Input, TextArea, Button, VStack } from 'native-base';

import { BlueShades, WhiteShades } from '../../../assets/style/color';
import { uploadBookPictures } from '../../../firebase/firebase-service';
import { addBook } from '../../../services/books-service';
import BookDetail from './BookDetails';
import ReadingStatus from './ReadingStatus';

const AddBook = ({ route, navigation }) => {
  let routeBookData = undefined;
  if (route.params !== undefined && route.params.book !== undefined) {
    routeBookData = route.params.book; // eslint-disable-line react/prop-types
  }
  const [bookObj, setBookObj] = useState({
    title:
      routeBookData === undefined &&
      routeBookData.volumeInfo === undefined &&
      routeBookData.volumeInfo.title === undefined
        ? ''
        : routeBookData.volumeInfo.title, // eslint-disable-line react/prop-types
    author:
      routeBookData === undefined &&
      routeBookData.volumeInfo === undefined &&
      routeBookData.volumeInfo.authors === undefined
        ? ''
        : routeBookData.volumeInfo.authors[0], // eslint-disable-line react/prop-types
    images:
      routeBookData !== undefined &&
      routeBookData !== null &&
      routeBookData.volumeInfo !== undefined &&
      routeBookData.volumeInfo.imageLinks !== undefined
        ? [routeBookData.volumeInfo.imageLinks.thumbnail] // eslint-disable-line react/prop-types
        : [],
    language:
      routeBookData === undefined &&
      routeBookData.volumeInfo === undefined &&
      routeBookData.volumeInfo.language === undefined
        ? ''
        : routeBookData.volumeInfo.language, // eslint-disable-line react/prop-types
    genre: '',
    edition: '',
    ISBN: route.params === undefined ? '' : route.params.ISBN, // eslint-disable-line react/prop-types
    bookCondition: '',
    readingStatus: 'To Read',
    location: '',
    shareable: false,
    notes:
      routeBookData === undefined &&
      routeBookData.volumeInfo === undefined &&
      routeBookData.volumeInfo.description === undefined
        ? ''
        : routeBookData.volumeInfo.description, // eslint-disable-line react/prop-types
  });

  const handleSaveBtn = async () => {
    try {
      const uploadedURLs = await uploadBookPictures(bookObj.images, bookObj.title);
      await addBook({ ...bookObj, images: [...uploadedURLs] });
      navigation.navigate('BottomTab');
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
        <Button onPress={handleSaveBtn} my={2} bg={BlueShades.primaryBlue} _text={{ color: WhiteShades.primaryWhite }}>
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
