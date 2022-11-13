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
  WhiteShades,
} from '../../../assets/style/color';
import { useEffect, useState } from 'react';
import { triggerNotificationForAction } from '../../../services/trigger-service';
import { getBookById } from '../../../services/books-service';
import Spinner from 'react-native-loading-spinner-overlay';
import { getUserById } from '../../../services/users-service';

const SingleView = ({ navigation, route }) => {
  const bookId = route.params.bookId;
  const isFromNotification = route.params.isfromNotification;
  const requestorId = route.params.requestorId;
  const [isDisabled, setIsDisabled] = useState(false);
  const [bookData, setBookData] = useState({});
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [requestor, setRequestor] = useState({});
  const {
    images,
    title,
    author,
    owner,
    genre,
    edition,
    language,
    isbn,
    condition,
    _id,
    borrowingStatus,
  } = route.params.bookData;

  useEffect(() => {
    getBookById(bookId).then(book => {
      setBookData(book.data);
      setSpinnerVisible(false);
    });

    if (isFromNotification) {
      // get requestor by Id
      // Not working
      getUserById(requestorId).then(res => {
        console.log(res);
        // setRequestor(res.data);
      });
    }
  }, [bookId]);

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
    let res = await triggerNotificationForAction({ triggerType: 'request_to_borrow', book: bookData._id });
    console.log('res', res);
    setIsDisabled(true);
  };

  const HandleAcceptRequest = () => {
    let res = triggerNotificationForAction({ triggerType: 'borrow_request_accept', book: bookId });
    console.log('res', res);
  };

  const HandleDeclineRequest = () => {
    let res = triggerNotificationForAction({ triggerType: 'borrow_request_decline', book: bookId });
    console.log('res', res);
  };

  const ShowButtonAsPerHoldStatus = borrowingStatus => {
    switch (borrowingStatus) {
      case 'Available':
        return (
          <Button
            disabled={isDisabled}
            backgroundColor={isDisabled ? BlackShades.tertiaryBlack : BlueShades.primaryBlue}
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
            onPress={handleRequestToBorrow}
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
            onPress={handleRequestToBorrow}
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
              <HStack mb={5} mt={3} alignItems='center'>
                {isFromNotification && Object.keys(requestor).length > 0 ? (
                  <>
                    <Text fontSize='16px'>Requested by </Text>
                    <Avatar
                      size='sm'
                      w='30px'
                      mx={1}
                      source={{
                        uri: requestor.photoURL,
                      }}
                    />
                    <Link _text={{ color: OrangeShades.primaryOrange, fontSize: '16px' }}>{requestor.displayName}</Link>
                  </>
                ) : (
                  <>
                    <Text fontSize='16px'>Owned by </Text>
                    <Avatar
                      size='sm'
                      w='30px'
                      mx={1}
                      source={{
                        uri: owner.photoURL,
                      }}
                    />
                    <Link _text={{ color: OrangeShades.primaryOrange, fontSize: '16px' }}>{owner.displayName}</Link>
                  </>
                )}
              </HStack>

              <Box borderRadius='10px' backgroundColor={BlueShades.tertiaryBlue} px={5} py={4}>
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
                    <Text fontSize='16px'>{genre}</Text>
                    <Text fontSize='16px'>{edition}</Text>
                    <Text fontSize='16px'>{language}</Text>
                    <Text fontSize='16px'>{isbn}</Text>
                    <Text fontSize='16px'>{condition}</Text>
                  </VStack>
                </HStack>
              </Box>
              <BooksSameOwner userId={owner._id} ownerName={owner.displayName} bookId={_id} navigation={navigation} />
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
      <Divider shadow={2} />
      {!isFromNotification ? (
        <Box position='fixed' bottom={0} backgroundColor='white' pb='10px'>
          {ShowButtonAsPerHoldStatus(borrowingStatus)}
        </Box>
      ) : (
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
              height: '50px',
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
              height: '50px',
            }}
          >
            Accept
          </Button>
        </HStack>
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
