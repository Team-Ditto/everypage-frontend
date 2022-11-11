import { useState } from 'react';
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

const SingleBook = ({ navigation, route }) => {
  const bookData = route.params.libCardData;
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
    readingStatus,
    location,
    sharable,
    note,
  } = bookData;

  const [showModal, setShowModal] = useState(false);
  const [switchValue, setSwitchValue] = useState(sharable);
  const [borrowingStatusButton, setBorrowingStatusButton] = useState(borrowingStatus);

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

  const handleBadgePressed = () => {
    setShowModal(!showModal);
  };

  const handleBorrowingStatusSelected = status => {
    setBorrowingStatusButton(status);
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
                {switchValue ? (
                  <Pressable mt={1} onPress={handleBadgePressed}>
                    <Badge h={30} w={102} borderRadius='6px' style={handleBorrowingStatus(borrowingStatusButton)}>
                      <HStack justifyContent='center' alignItems='center'>
                        <Text w={60} textAlign='center' style={handleBorrowingStatus(borrowingStatusButton)}>
                          {borrowingStatusButton}
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
                    <Text fontSize='16px'>{genre}</Text>
                    <Text fontSize='16px'>{edition}</Text>
                    <Text fontSize='16px'>{language}</Text>
                    <Text fontSize='16px'>{isbn}</Text>
                    <Text fontSize='16px'>{condition}</Text>
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
                    <Text fontSize='16px'>{readingStatus}</Text>
                    <Text fontSize='16px'>{location}</Text>
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
                      // setBookObj(prevState => ({ ...prevState, shareable: value });
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
                <Text fontSize={16}>{note ?? ` :: There is no notes :: `}</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
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
