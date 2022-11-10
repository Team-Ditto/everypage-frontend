import React, { useState } from 'react';
import { HStack, Image, Select, Text, VStack, Switch, CheckIcon } from 'native-base';
import { StyleSheet } from 'react-native';
const SingleBook = ({ route, navigation }) => {
  const [isShareable, setIsShareable] = useState(false);
  const [libCardData, setlibCardData] = useState(route.params.libCardData);
  // Change it to get the data from the API
  // Not use the above params data.
  let [service, setService] = useState('');
  return (
    <>
      <VStack style={Styles.mainContainer}>
        <HStack>
          <Image
            style={Styles.ImageContainerStyle}
            source={{
              uri: libCardData.images[0],
            }}
            alt='Alternate Text'
            size='xl'
          />
          <VStack style={Styles.bookTitleAuthContainer}>
            <Text style={Styles.bookTitle}>{libCardData.title}</Text>
            <Text style={Styles.bookAuthor}>{libCardData.author} </Text>
            {isShareable ? (
              <Select
                accessibilityLabel='Choose...'
                placeholder='Choose...'
                size='sm'
                w='120'
                selectedValue={service}
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size='5' />,
                }}
                mt={1}
                ml={15}
                onValueChange={itemValue => setService(itemValue)}
              >
                <Select.Item label='Available' value='available' />
                <Select.Item label='In use' value='in-use' />
                <Select.Item label='Hold' value='hold' />
              </Select>
            ) : (
              ''
            )}
          </VStack>
        </HStack>
        <VStack style={Styles.secondHalfContainer}>
          <Text style={Styles.subHeading}>Details</Text>
          <HStack style={Styles.subHstack}>
            <Text style={Styles.subTitle}>Genre</Text>
            <Text>Comics</Text>
          </HStack>
          <HStack style={Styles.subHstack}>
            <Text style={Styles.subTitle}>Edition</Text>
            <Text>First</Text>
          </HStack>
          <HStack style={Styles.subHstack}>
            <Text style={Styles.subTitle}>Language</Text>
            <Text>First</Text>
          </HStack>
          <HStack style={Styles.subHstack}>
            <Text style={Styles.subTitle}>ISBN</Text>
            <Text>First</Text>
          </HStack>
          <HStack style={Styles.subHstack}>
            <Text style={Styles.subTitle}>Condition</Text>
            <Text>First</Text>
          </HStack>

          <VStack>
            <Text style={Styles.subHeading}>Reading Info</Text>
            <HStack style={Styles.subHstack}>
              <Text style={Styles.subTitle}>Reading Status</Text>
              <Text>Reading</Text>
            </HStack>
            <HStack style={Styles.subHstack}>
              <Text style={Styles.subTitle}>Location</Text>
              <Text>Shelf 001</Text>
            </HStack>
          </VStack>
          <VStack>
            <HStack style={Styles.shareStack}>
              <Text style={Styles.subHeading}>Share</Text>
              <Switch
                size='sm'
                mt={3}
                value={isShareable}
                onValueChange={value => {
                  setIsShareable(value);
                }}
              />
            </HStack>
            <Text color='muted.500'>Book is Available for others user to request</Text>
          </VStack>
          <VStack>
            <Text style={Styles.subHeading}>Notes</Text>
            <Text>This book I purchased online in Sep 2020</Text>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    display: 'flex',
  },
  ImageContainerStyle: {
    width: '40%',
  },
  bookTitleAuthContainer: {
    width: '60%',
  },
  bookTitle: {
    paddingTop: 2,
    paddingLeft: 15,
    marginRight: 15,
    fontSize: 24,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  bookAuthor: {
    color: 'grey',
    fontSize: 14,
    paddingLeft: 15,
  },
  subHeading: {
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 18,
  },
  subHstack: {
    paddingTop: 5,
  },
  shareStack: {
    paddingTop: 5,
    display: 'flex',
    justifyContent: 'space-between',
  },
  subTitle: {
    color: 'grey',
    width: 150,
  },
  titleColor: {
    color: 'grey',
  },
});

export default SingleBook;
