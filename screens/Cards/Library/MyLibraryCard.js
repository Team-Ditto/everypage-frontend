import { Box, AspectRatio, Image, VStack, Text, Pressable, Badge, HStack } from 'native-base';
import { StyleSheet } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import WishlistButton from '../../Assets/WishlistButton';
import { AuthContext } from '../../../contexts/AuthContext';
import { SuccessColor, InUseColor, OnHoldColor } from '../../../assets/style/color';
import { createNewWishlist, deleteWishlistByBookId } from '../../../services/wishlists-service';
import { responsePathAsArray } from 'graphql';

const MyLibraryCard = ({ data, navigation, showWishListIcon = false, displayBadge = true, wishlistStatus }) => {
  const { title, author, images, borrowingStatus } = data;
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

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
    } else {
      setIsWishlisted(true);
      createNewWishlist(createdWishlist);
    }
  };

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

  // let i = 0;
  // while (i < currentUser.wishlists.length) {
  //   if (currentUser.wishlists[i].book === data._id) {
  //     setIsWishlisted(true);
  //   }
  //   i++;
  // }

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
            />
            {showWishListIcon ? (
              <HStack position='absolute' left='0' justifyContent='space-between' width='100%'>
                <Box justifyContent='center' m={2}>
                  {displayBadge ? (
                    <Badge p={0.5} px={1} style={handleBorrowingStatus(borrowingStatus)}>
                      <Text style={handleBorrowingStatus(borrowingStatus)}>{borrowingStatus}</Text>
                    </Badge>
                  ) : (
                    <></>
                  )}
                </Box>
                <WishlistButton
                  isWishlisted={isWishlisted}
                  handleWishlistPress={handleWishlistPress}
                  onHeader={false}
                />
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

export default MyLibraryCard;
