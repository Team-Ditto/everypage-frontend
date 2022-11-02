import { FormControl, Stack, Input, TextArea, Button, Box, VStack } from 'native-base';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { BlueShades, whiteShades } from '../../../assets/style/color';
import BookDetail from './BookDetails';
import ReadingStatus from './ReadingStatus';

const AddBook = () => {
  const handleSaveBtn = () => {
    console.log('BOK OBJ', bookObj);
  };

  const [bookObj, setBookObj] = useState({
    title: '',
    author: '',
    images: '',
    language: '',
    genre: '',
    edition: '',
    ISBN: '',
    bookCondition: '',
    readingStatus: '',
    location: '',
    shareable: false,
    notes: '',
  });

  return (
    <VStack bg='muted.50' padding={3}>
      <ScrollView>
        <FormControl required>
          <FormControl.Label color='black'>TITLE</FormControl.Label>
          <Input
            borderWidth={0}
            style={styles.inputStyle}
            borderRadius={10}
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
            bg={BlueShades.tertiaryBlue}
            onChangeText={text => {
              setBookObj(prevState => ({ ...prevState, notes: text }));
            }}
          />
        </FormControl>
        <Button onPress={handleSaveBtn} my={2}>
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
