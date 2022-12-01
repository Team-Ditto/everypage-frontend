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
  View,
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
  BlackShades,
} from '../../../assets/style/color';
import { useContext, useEffect, useState } from 'react';
import { triggerNotificationForAction } from '../../../services/trigger-service';
import { getBookById } from '../../../services/books-service';
import Spinner from 'react-native-loading-spinner-overlay';
import { getUserById } from '../../../services/users-service';
import { AuthContext } from '../../../contexts/AuthContext';

const SingleView = ({ navigation, route }) => {
  const bookId = route.params.bookId;
  const [bookData, setBookData] = useState({});
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const { currentUser } = useContext(AuthContext);

  const {
    images,
    title,
    author,
    owner,
    genre,
    edition,
    language,
    ISBN,
    bookCondition,
    _id,
    borrowingStatus,
    requestor,
    bearer,
    bookReturnRequest,
  } = bookData;

  useEffect(() => {
    getSingleBook();
  }, [bookId]);

  const getSingleBook = async () => {
    const book = await getBookById(bookId);
    setBookData(book.data);
    setSpinnerVisible(false);
  };

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

  const handleRequestToBorrow = async () => {
    setBookData({});
    setSpinnerVisible(true);
    await triggerNotificationForAction({ triggerType: 'request_to_borrow', book: bookData._id });
    await getSingleBook();
  };

  const handleReturnRequest = async () => {
    setBookData({});
    setSpinnerVisible(true);
    await triggerNotificationForAction({ triggerType: 'user_returns', book: bookData._id });
    await getSingleBook();
  };

  const handleCancelHold = async () => {
    setBookData({});
    setSpinnerVisible(true);
    await triggerNotificationForAction({ triggerType: 'cancel_hold', book: bookData._id });
    await getSingleBook();
  };

  const ShowButtonAsPerHoldStatus = borrowingStatus => {
    switch (borrowingStatus) {
      case 'Available':
        return (
          <Button
            backgroundColor={BlueShades.primaryBlue}
            borderRadius='10px'
            shadow={2}
            m={5}
            shadowOffset={{ width: '-20px', height: '-20px' }}
            onPress={handleRequestToBorrow}
          >
            Request to Borrow
          </Button>
        );
      case 'In-Use':
        return (
          <Button
            m={5}
            backgroundColor={BlueShades.primaryBlue}
            borderRadius='10px'
            shadow={2}
            shadowOffset={{ width: '-20px', height: '-20px' }}
            onPress={handleReturnRequest}
            disabled={bookReturnRequest}
          >
            Return
          </Button>
        );
      case 'On-Hold':
        return (
          <Button
            backgroundColor={BlueShades.primaryBlue}
            borderRadius='10px'
            shadow={2}
            m={5}
            shadowOffset={{ width: '-20px', height: '-20px' }}
            onPress={handleCancelHold}
          >
            Cancel Hold
          </Button>
        );
    }
  };

  return Object.keys(bookData).length > 0 ? (
    <>
      <ScrollView>
        <VStack>
          <Carousel images={images} />
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
                    {title}
                  </Heading>
                  <Text fontSize='16px'>{author}</Text>
                </VStack>
                <Box mt={1}>
                  <Badge p={0.5} px={1} style={handleBorrowingStatus(borrowingStatus)}>
                    <Text style={handleBorrowingStatus(borrowingStatus)}>{borrowingStatus}</Text>
                  </Badge>
                </Box>
              </HStack>
              <HStack my={3} alignItems='center'>
                <Text fontSize='16px'>Owned by </Text>
                {bookData.owner !== undefined ? (
                  <Avatar
                    size='sm'
                    w='30px'
                    mx={1}
                    borderColor={BlueShades.primaryBlue}
                    borderStyle='solid'
                    borderWidth={1}
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

              <Box borderRadius='10px' backgroundColor={BlueShades.tertiaryBlue} px={5} py={4}>
                <Text fontWeight='bold' fontSize='18px'>
                  Details
                </Text>
                <HStack justifyContent='space-between'>
                  <VStack>
                    <Text fontSize='16px' mt={1}>
                      Genre
                    </Text>
                    <Text fontSize='16px' mt={1}>
                      Edition
                    </Text>
                    <Text fontSize='16px' mt={1}>
                      Language
                    </Text>
                    <Text fontSize='16px' mt={1}>
                      ISBN
                    </Text>
                    <Text fontSize='16px' mt={1}>
                      Condition
                    </Text>
                  </VStack>
                  <VStack>
                    <Text fontSize='16px' mt={1}>
                      {genre}
                    </Text>
                    <Text fontSize='16px' mt={1}>
                      {edition}
                    </Text>
                    <Text fontSize='16px' mt={1}>
                      {language}
                    </Text>
                    <Text fontSize='16px' mt={1}>
                      {ISBN}
                    </Text>
                    <Text fontSize='16px' mt={1}>
                      {bookCondition}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
              <BooksSameOwner userId={owner._id} ownerName={owner.displayName} bookId={_id} navigation={navigation} />
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
      <Divider shadow={2} />
      {((requestor && requestor._id === currentUser._id) || (bearer && bearer._id === currentUser._id)) &&
        borrowingStatus !== 'In-Use' && (
          <Box position='fixed' bottom={0} backgroundColor='white' pb='10px'>
            {ShowButtonAsPerHoldStatus('On-Hold')}
          </Box>
        )}

      {bearer && bearer._id === currentUser._id && borrowingStatus === 'In-Use' && (
        <Box position='fixed' bottom={0} backgroundColor='white' pb='10px'>
          {ShowButtonAsPerHoldStatus('In-Use')}
        </Box>
      )}

      {!bearer && !requestor && (
        <Box position='fixed' bottom={0} backgroundColor='white' pb='10px'>
          {ShowButtonAsPerHoldStatus('Available')}
        </Box>
      )}
    </>
  ) : (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  available: {
    backgroundColor: SuccessColor.successBG,
    borderColor: SuccessColor.successText,
    color: SuccessColor.successText,
    borderRadius: '4px',
  },
  inUse: {
    backgroundColor: InUseColor.inUseBG,
    borderColor: InUseColor.inUseText,
    color: InUseColor.inUseText,
    borderRadius: '4px',
  },
  onHold: {
    backgroundColor: OnHoldColor.onHoldBG,
    borderColor: OnHoldColor.onHoldText,
    color: OnHoldColor.onHoldText,
    borderRadius: '4px',
  },
});

export default SingleView;
