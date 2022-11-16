import { useEffect, useState } from 'react';
import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Badge,
  Avatar,
  ScrollView,
  Link,
  Button,
  Divider,
  Pressable,
  ChevronDownIcon,
  Switch,
} from 'native-base';
import { StyleSheet } from 'react-native';

import Carousel from '../../Assets/Carousel';
import {
  BlueShades,
  SuccessColor,
  InUseColor,
  OnHoldColor,
  OrangeShades,
  WhiteShades,
} from '../../../assets/style/color';
import SelectBookStatus from '../../Main/Book/SelectBookStatus';
import { getBookById, updateBookStatusById } from '../../../services/books-service';
import Spinner from 'react-native-loading-spinner-overlay';
import { triggerNotificationForAction } from '../../../services/trigger-service';

const SingleBook = ({ navigation, route }) => {
  const bookId = route.params.bookId;
  const [bookData, setBookData] = useState({});
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [borrowingStatusButton, setBorrowingStatusButton] = useState(null);

  const handleBorrowingStatus = b => {
    switch (b) {
      case 'Available':
        return styles.available;
      case 'In-Use':
        return styles.inUse;
      case 'On-Hold':
        return styles.onHold;
    }
  };

  useEffect(() => {
    getSingleBook();
  }, []);

  useEffect(() => {
    console.log(switchValue);
  }, [switchValue]);

  const getSingleBook = async () => {
    const book = await getBookById(bookId);
    setBookData(book.data);
    console.log('fetech book data: ', book.data);
    setSwitchValue(book.data.shareable);
    setBorrowingStatusButton(book.data.borrowingStatus);
    setSpinnerVisible(false);
  };

  const handleBadgePressed = () => {
    setShowModal(!showModal);
  };

  const handleBorrowingStatusSelected = status => {
    setBorrowingStatusButton(status);
  };

  const HandleAcceptRequest = async () => {
    setBookData({});
    setSpinnerVisible(true);
    await triggerNotificationForAction({ triggerType: 'borrow_request_accept', book: bookId });
    await getSingleBook();
  };

  const HandleDeclineRequest = async () => {
    setBookData({});
    setSpinnerVisible(true);
    await triggerNotificationForAction({ triggerType: 'borrow_request_decline', book: bookId });
    await getSingleBook();
  };

  const HandleReturnBook = async () => {
    // setBookData({});
    // setSpinnerVisible(true);
    // await triggerNotificationForAction({ triggerType: 'user_returns', book: bookId });
    // await getSingleBook();
    alert('Working on the Feature....Have faith!!!');
  };

  const setShareable = async value => {
    await updateBookStatusById(bookId, { shareable: value });
    setSwitchValue(value);
  };

  return (
    <>
      <ScrollView>
        {bookData && Object.keys(bookData).length > 0 ? (
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
                            {bookData.borrowingStatus}
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
                      <Text fontSize='16px'>{bookData.ISBN}</Text>
                      <Text fontSize='16px'>{bookData.bookCondition}</Text>
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
                      onValueChange={value => setShareable(value)}
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
                  <Text fontSize={16}>{bookData.notes ?? ` `}</Text>
                </Box>
              </VStack>
            </Box>
            <SelectBookStatus
              showModal={showModal}
              handleBorrowingStatusSelected={handleBorrowingStatusSelected}
              handleBadgePressed={handleBadgePressed}
            />
          </VStack>
        ) : (
          <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
        )}
      </ScrollView>
      <Divider shadow={2} />
      {bookData && bookData.requestor && borrowingStatusButton === 'On-Hold' && (
        <HStack
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: WhiteShades.primaryWhite,
          }}
        >
          <Button
            borderWidth={1}
            marginY={5}
            borderColor={BlueShades.primaryBlue}
            _text={{ color: BlueShades.primaryBlue }}
            style={{
              backgroundColor: WhiteShades.primaryWhite,
              color: BlueShades.primaryBlue,
              width: '45%',
              height: 50,
            }}
            onPress={HandleDeclineRequest}
          >
            Decline
          </Button>
          <Button
            marginY={5}
            onPress={HandleAcceptRequest}
            style={{
              backgroundColor: BlueShades.primaryBlue,
              color: WhiteShades.primaryWhite,
              width: '45%',
              height: 50,
            }}
          >
            Accept
          </Button>
        </HStack>
      )}
      {bookData && bookData.bearer && borrowingStatusButton === 'On-Hold' && (
        <HStack
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: WhiteShades.primaryWhite,
          }}
        >
          <Button
            marginY={5}
            _text={{ color: WhiteShades.primaryWhite }}
            style={{
              backgroundColor: BlueShades.primaryBlue,
              width: '90%',
              height: 50,
            }}
            onPress={HandleReturnBook}
          >
            Return
          </Button>
        </HStack>
      )}
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
