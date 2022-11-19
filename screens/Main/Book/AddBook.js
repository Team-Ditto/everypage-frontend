import { useState } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { FormControl, Input, TextArea, Button, VStack, KeyboardAvoidingView } from 'native-base';

import { BlueShades, WhiteShades } from '../../../assets/style/color';
import { uploadBookPictures } from '../../../firebase/firebase-service';
import { addBook } from '../../../services/books-service';
import BookDetail from './BookDetails';
import ReadingStatus from './ReadingStatus';

const AddBook = ({ route, navigation }) => {
  let routeBookData = undefined;
  if (route.params !== undefined && route.params.book !== undefined) {
    routeBookData = route.params.book;
  }
  const [bookObj, setBookObj] = useState({
    title:
      routeBookData && routeBookData.volumeInfo && routeBookData.volumeInfo.title ? routeBookData.volumeInfo.title : '',
    author:
      routeBookData &&
      routeBookData.volumeInfo &&
      routeBookData.volumeInfo.authors &&
      routeBookData.volumeInfo.authors.length > 0
        ? routeBookData.volumeInfo.authors[0]
        : '',
    images:
      routeBookData &&
      routeBookData.volumeInfo &&
      routeBookData.volumeInfo.imageLinks &&
      routeBookData.volumeInfo.imageLinks.thumbnail
        ? [routeBookData.volumeInfo.imageLinks.thumbnail]
        : [],
    language:
      routeBookData && routeBookData.volumeInfo && routeBookData.volumeInfo.language
        ? routeBookData.volumeInfo.language
        : '',
    genre: '',
    edition: '',
    ISBN: route && route.params && route && route.params.ISBN ? route.params.ISBN : '',
    bookCondition: '',
    readingStatus: 'To Read',
    location: '',
    shareable: false,
    notes:
      routeBookData && routeBookData.volumeInfo && routeBookData.volumeInfo.description
        ? routeBookData.volumeInfo.description
        : '',
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
    <KeyboardAvoidingView
      h={{
        base: Dimensions.get('window').height - 40,
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
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
          <Button
            onPress={handleSaveBtn}
            mt={2}
            mb={20}
            bg={BlueShades.primaryBlue}
            _text={{ color: WhiteShades.primaryWhite }}
          >
            Save
          </Button>
        </ScrollView>
      </VStack>
    </KeyboardAvoidingView>
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
