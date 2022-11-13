import { VStack, HStack, Box, Text, Heading, Badge, Avatar, Button, ScrollView, Link, Divider } from 'native-base';
import { StyleSheet, Touchable, TouchableOpacity } from 'react-native';

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
import { createNewWishlist } from '../../../services/wishlists-service';
import { useState } from 'react';

const SingleView = ({ navigation, route }) => {
  const bookData = route.params.bookData;
  const [isDisabled, setIsDisabled] = useState(false);
  console.log('bookData', bookData);

  const { images, title, author, owner, genre, edition, language, isbn, condition, _id, borrowingStatus } = bookData;

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

  const handleRequestToBorrow = () => {
    const createdWishlist = {
      book: bookData._id,
      status: 'Requested',
    };

    // Update the Book Status first. 
    // To onHold.
    // Then create the wishlist. in the rquested State.
         createNewWishlist(createdWishlist);
    // Request to borrow trigger
    //  Hence sending the notification
          setIsDisabled(true);
    //  then(navigation.navigate('Wishlist'));
  };

  return (
    <>
      <ScrollView>
        <VStack>
          <Carousel position='sticky' top={0} images={images} />
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
      <Box position='fixed' bottom={0} backgroundColor='white' pb='10px'>
        {isDisabled ? (
          <Button
            m='24px'
            disabled={true}
            backgroundColor={BlackShades.tertiaryBlack}
            borderRadius='10px'
            shadow={2}
            shadowOffset={{ width: '-20px', height: '-20px' }}
            onPress={handleRequestToBorrow}
          >
            Request to Borrow
          </Button>
        ) : (
          <Button
            m='24px'
            backgroundColor={BlueShades.primaryBlue}
            borderRadius='10px'
            shadow={2}
            shadowOffset={{ width: '-20px', height: '-20px' }}
            onPress={handleRequestToBorrow}
          >
            Request to Borrow
          </Button>
        )}
      </Box>
    </>
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
