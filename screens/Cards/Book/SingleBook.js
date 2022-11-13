import { useEffect, useState } from 'react';
import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Badge,
  Avatar,
  Button,
  ScrollView,
  Link,
  Divider,
  Pressable,
  ChevronDownIcon,
  Switch,
} from 'native-base';
import { StyleSheet } from 'react-native';

import Carousel from '../../Assets/Carousel';
import BooksSameOwner from '../../Assets/BooksSameOwner';
import {
  BlueShades,
  SuccessColor,
  InUseColor,
  OnHoldColor,
  OrangeShades,
  WhiteShades,
} from '../../../assets/style/color';
import { createNewWishlist } from '../../../services/wishlists-service';
import SelectBookStatus from '../../Main/Book/SelectBookStatus';
import { getBookById } from '../../../services/books-service';
import Spinner from 'react-native-loading-spinner-overlay';

const SingleBook = ({ navigation, route }) => {
  const bookId = route.params.bookId;
  const [bookData, setBookData] = useState({});
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [switchValue, setSwitchValue] = useState(bookData.shareable);
  const [borrowingStatusButton, setBorrowingStatusButton] = useState(bookData.borrowingStatus);

  const handleBorrowingStatus = b => {
    switch (b) {
      case 'Available':
        return styles.available;
        break;
      case 'In-Use':
        return styles.inUse;
        break;
      case 'On-Hold':
        return styles.onHold;
        break;
    }
  };

  useEffect(() => {
    console.log('ID', bookId);
    getBookById(bookId).then(res => {
      console.log('res', res.data);
      setBookData(res.data);
      setSpinnerVisible(false);
    });
  }, []);

  const handleBadgePressed = () => {
    setShowModal(!showModal);
  };

  const handleBorrowingStatusSelected = status => {
    setBorrowingStatusButton(status);
  };

  return (
    <>
      <ScrollView>
        {Object.keys(bookData).length > 0 ? (
          <VStack>
            <Carousel position='sticky' top={0} images={bookData.images !== undefined ? bookData.images : []} />
            <Box
              borderRadius='10px'
              position='relative'
              bottom='20px'
              backgroundColor='white'
              p={5}
              display='flex'
              h='100%'
            >
              <VStack>
                <HStack w='100%' justifyContent='space-between'>
                  <VStack w='75%'>
                    <Heading fontSize='20px' textTransform='capitalize'>
                      {bookData.title}
                    </Heading>
                    <Text fontSize='16px'>{bookData.author}</Text>
                  </VStack>
                  {switchValue ? (
                    <Pressable mt={1} onPress={handleBadgePressed}>
                      <Badge h={30} w={102} borderRadius='6px' style={handleBorrowingStatus(borrowingStatusButton)}>
                        <HStack justifyContent='center' alignItems='center'>
                          <Text w={60} textAlign='center' style={handleBorrowingStatus(borrowingStatusButton)}>
                            {bookData.borrowingStatusButton}
                          </Text>
                          <Divider orientation='vertical' bg={WhiteShades.primaryWhite} mx={1.5} />
                          <ChevronDownIcon style={handleBorrowingStatus(borrowingStatusButton)} />
                        </HStack>
                      </Badge>
                    </Pressable>
                  ) : (
                    <></>
                  )}
                </HStack>
                <HStack my={3} alignItems='center'>
                  <Text fontSize='16px'>Owned by </Text>
                  {bookData.owner !== undefined ? (
                    <Avatar
                      size='sm'
                      w='30px'
                      mx={1}
                      source={{
                        uri: bookData.owner.photoURL,
                      }}
                    />
                  ) : (
                    <></>
                  )}
                  <Link _text={{ color: OrangeShades.primaryOrange, fontSize: '16px' }}>
                    {bookData.owner !== undefined ? bookData.owner.displayName : ''}
                  </Link>
                </HStack>
                <Box borderRadius='10px' backgroundColor={BlueShades.tertiaryBlue} px={5} py={4} my={3}>
                  <Text fontWeight='bold' fontSize='18px'>
                    Details
                  </Text>
                  <HStack justifyContent='space-between'>
                    <VStack>
                      <Text fontSize='16px'>Genre</Text>
                      <Text fontSize='16px'>Edition</Text>
                      <Text fontSize='16px'>Language</Text>
                      <Text fontSize='16px'>ISBN</Text>
                      <Text fontSize='16px'>Condition</Text>
                    </VStack>
                    <VStack>
                      <Text fontSize='16px'>{bookData.genre}</Text>
                      <Text fontSize='16px'>{bookData.edition}</Text>
                      <Text fontSize='16px'>{bookData.language}</Text>
                      <Text fontSize='16px'>{bookData.isbn}</Text>
                      <Text fontSize='16px'>{bookData.condition}</Text>
                    </VStack>
                  </HStack>
                </Box>
                <Box borderRadius='10px' backgroundColor={BlueShades.tertiaryBlue} px={5} py={4} my={3}>
                  <Text fontWeight='bold' fontSize='18px'>
                    Reading Info
                  </Text>
                  <HStack justifyContent='space-between'>
                    <VStack>
                      <Text fontSize='16px'>Reading Status</Text>
                      <Text fontSize='16px'>Location</Text>
                    </VStack>
                    <VStack alignItems='start'>
                      <Text fontSize='16px'>{bookData.readingStatus}</Text>
                      <Text fontSize='16px'>{bookData.location}</Text>
                    </VStack>
                  </HStack>
                </Box>
                <Box borderRadius='10px' backgroundColor={BlueShades.tertiaryBlue} px={5} py={4} my={3}>
                  <HStack justifyContent='space-between' alignItems='center'>
                    <Text fontWeight='bold' fontSize='18px'>
                      Share
                    </Text>
                    <Switch
                      onTrackColor={BlueShades.primaryBlue}
                      size='sm'
                      value={switchValue}
                      onValueChange={value => {
                        setSwitchValue(value);
                        //  Update Book Status
                      }}
                    />
                  </HStack>
                  <Text fontSize={16}>
                    {switchValue
                      ? `Book is available for other users to request.`
                      : `No other users can request to borrow this book.`}
                  </Text>
                </Box>
                <Box borderRadius='10px' backgroundColor={BlueShades.tertiaryBlue} px={5} py={4} my={3}>
                  <HStack justifyContent='space-between' alignItems='center'>
                    <Text fontWeight='bold' fontSize='18px'>
                      Notes
                    </Text>
                  </HStack>
                  <Text fontSize={16}>{bookData.note ?? ` :: There is no notes :: `}</Text>
                </Box>
              </VStack>
            </Box>
          </VStack>
        ) : (
          <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
        )}
      </ScrollView>
      <SelectBookStatus
        showModal={showModal}
        handleBorrowingStatusSelected={handleBorrowingStatusSelected}
        handleBadgePressed={handleBadgePressed}
      />
    </>
  );
};

const styles = StyleSheet.create({
  available: {
    backgroundColor: SuccessColor.success,
    borderColor: WhiteShades.primaryWhite,
    color: WhiteShades.primaryWhite,
  },
  inUse: {
    backgroundColor: InUseColor.inUse,
    borderColor: WhiteShades.primaryWhite,
    color: WhiteShades.primaryWhite,
  },
  onHold: {
    backgroundColor: OnHoldColor.onHold,
    borderColor: WhiteShades.primaryWhite,
    color: WhiteShades.primaryWhite,
  },
});

export default SingleBook;
