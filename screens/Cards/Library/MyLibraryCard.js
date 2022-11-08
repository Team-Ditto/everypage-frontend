import { Box, AspectRatio, Image, VStack, Text, Pressable, Badge, HStack } from 'native-base';
import { StyleSheet } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import WishlistButton from '../../Assets/WishlistButton';
import { AuthContext } from '../../../contexts/AuthContext';
import { BlueShades, SuccessColor, InUseColor, OnHoldColor } from '../../../assets/style/color';
import { createNewWishlist, deleteWishlistByBookId } from '../../../services/wishlists-service';
import { responsePathAsArray } from 'graphql';

const MyLibraryCard = ({ data, navigation, showWishListIcon = false, displayBadge = true, wishlistStatus }) => {
  const { title, author, images, borrowingStatus } = data;
  const [isWishlisted, setIsWishlisted] = useState(wishlistStatus);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  // console.log('########', data);

  // const addWishlistToUser = wishlist => {
  //   const index = currentUser.wishlists.findIndex(item => item._id === wishlist._id);
  //   console.log(index);
  //   if (index === -1) {
  //     currentUser.wishlists.push(wishlist);

  //     const updatedUser = {
  //       ...currentUser,
  //       wishlists: [...currentUser.wishlists],
  //     };

  //     setCurrentUser(updatedUser);
  //     // createNewWishlist(data._id);
  //   }
  // };

  // const removeWishlistFromUser = wishlist => {
  //   const updatedUser = {
  //     ...currentUser,
  //     wishlists: currentUser.wishlists.filter(item => item._id !== wishlist._id),
  //   };

  //   setCurrentUser(updatedUser);
  //   // deleteWishlistByBookId(data._id);
  // };

  const handleWishlistPress = () => {
    // you call the api
    //in response you will get the created/deleted wishlist

    const createdWishlist = {
      book: data._id,
      status: 'For Later',
    };

    if (isWishlisted) {
      setIsWishlisted(false);
      deleteWishlistByBookId(data._id);

      // removeWishlistFromUser(createdWishlist);
    } else {
      setIsWishlisted(true);
      createNewWishlist(createdWishlist);
      // addWishlistToUser(createdWishlist);
    }
  };
  // console.log('****** ', currentUser.wishlists, ' *******');

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

  return (
    <Pressable
      onPress={() => {
        showWishListIcon
          ? navigation.navigate('SingleView', {
              bookData: data,
              isWishlisted: isWishlisted,
              setIsWishlisted: setIsWishlisted,
              onHeader: false,
            })
          : navigation.navigate('SingleBook', {
              libCardData: data,
            });
      }}
      alignItems='center'
      w='47%'
      mx={1}
    >
      <VStack>
        <AspectRatio w='100%' ratio={164 / 210}>
          <VStack style={{ display: 'flex', position: 'relative' }}>
            <Image
              w='100%'
              h='100%'
              borderRadius={10}
              source={{
                uri: images[0],
              }}
              alt={title}
              borderRadius='10px'
            />
            {showWishListIcon ? (
              <HStack position='absolute' left='0' justifyContent='space-between' width='100%'>
                <Box justifyContent='center' m={2}>
                  {displayBadge ? (
                    <Badge p={0.5} style={handleBorrowingStatus(borrowingStatus)}>
                      {borrowingStatus}
                    </Badge>
                  ) : (
                    <></>
                  )}
                </Box>
                <Box m={2} bg={isWishlisted ? BlueShades.primaryBlue : 'white'} borderRadius='full' shadow={3}>
                  <WishlistButton
                    isWishlisted={isWishlisted}
                    handleWishlistPress={handleWishlistPress}
                    onHeader={false}
                  />
                </Box>
              </HStack>
            ) : (
              ''
            )}
          </VStack>
        </AspectRatio>
        <Box pt={1} pb={3}>
          <VStack>
            <Text fontWeight='semibold' textTransform='capitalize'>
              {title}
            </Text>
            <Text>{author}</Text>
          </VStack>
        </Box>
      </VStack>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  available: {
    backgroundColor: SuccessColor.successBG,
    borderColor: SuccessColor.successText,
    _text: { color: SuccessColor.successText },
    borderRadius: '4px',
  },
  inUse: {
    backgroundColor: InUseColor.inUseBG,
    borderColor: InUseColor.inUseText,
    _text: { color: InUseColor.inUseText },
    borderRadius: '4px',
  },
  onHold: {
    backgroundColor: OnHoldColor.onHoldBG,
    borderColor: OnHoldColor.onHoldText,
    _text: { color: OnHoldColor.onHoldText },
    borderRadius: '4px',
  },
});

export default MyLibraryCard;
