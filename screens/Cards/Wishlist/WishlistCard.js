import { useState } from 'react';
import { Box, Image, VStack, Text, Pressable, Button, HStack, Link } from 'native-base';
import { InUseColor, OnHoldColor, SuccessColor } from '../../../assets/style/color';
import { requestToBorrow, requestCancelHold } from '../../../services/notifications-services';
import WishlistButton from '../../Assets/WishlistButton';
import { createNewWishlist, deleteWishlistByBookId } from '../../../services/wishlists-service';
import { OrangeShades } from '../../../assets/style/color';

const WishlistCard = ({ data, navigation, showWishListIcon = false, selectedTab }) => {
  const [isWishlisted, setIsWishlisted] = useState(true);
  const { book } = data;

  let curStyle = {};

  const handleWishlistPress = () => {
    if (isWishlisted) {
      setIsWishlisted(false);
      deleteWishlistByBookId(data.book._id);
    }
  };

  function handleRequestToBorrow() {
    const requestedObject = {
      wishlist: data._id,
      triggerType: 'request_to_borrow',
    };
    requestToBorrow(requestedObject);
  }

  function handleCancelHold() {
    const requestedObject = {
      book: data.book._id,
      triggerType: 'cancel_hold',
    };
    requestCancelHold(requestedObject);
  }

  const statusStyle = [
    {
      status: 'Available',
      backgroundColor: SuccessColor.successBG,
      textColor: SuccessColor.successText,
    },
    {
      status: 'In-Use',
      backgroundColor: InUseColor.inUseBG,
      textColor: InUseColor.inUseText,
    },
    {
      status: 'On-Hold',
      backgroundColor: OnHoldColor.onHoldBG,
      textColor: OnHoldColor.onHoldText,
    },
  ];

  switch (book.borrowingStatus) {
    case 'Available':
      curStyle = statusStyle[0];
      break;

    case 'In-Use':
      curStyle = statusStyle[1];
      break;

    case 'On-Hold':
      curStyle = statusStyle[2];
      break;

    default:
      console.log('Book status not available');
  }

  return (
    <VStack bgColor='#FFFFFF' borderRadius='10' mx='4%' p='15px' mb='20px' w='92%'>
      <Pressable
        onPress={() => {
          navigation.navigate('SingleView', {
            bookData: book,
          });
        }}
        alignItems='center'
        mx={1}
      >
        <HStack display='flex' flex='1'>
          <Box style={{ display: 'flex', flex: 1 }}>
            <Image
              style={{ position: 'absolute', left: 0, width: '100%', height: '100%' }}
              borderRadius='10px'
              source={{
                uri: book.images[0],
              }}
              alt={book.title}
            />
            <Box style={{ position: 'absolute', right: 0, width: 64 }}>
              <WishlistButton isWishlisted={isWishlisted} handleWishlistPress={handleWishlistPress} onHeader={false} />
            </Box>
          </Box>
          <Box w='55%' ml='3%' display='flex'>
            <Text flex='1' fontWeight='semibold' fontSize='md'>
              {book.title}
            </Text>
            <Text fontSize='md'>{book.author}</Text>
            <Box
              bgColor={curStyle.backgroundColor}
              borderRadius='4px'
              borderColor={curStyle.textColor}
              borderStyle='solid'
              borderWidth='1px'
              p='4px'
              marginY='7px'
              marginRight='auto'
            >
              <Text color={curStyle.textColor}>{book.borrowingStatus}</Text>
            </Box>
            <Text fontSize='sm'>Owned by</Text>
            <HStack display='flex' flexDirection='row' gap='10px' alignItems='center'>
              <Image
                w='30px'
                h='30px'
                borderRadius='50%'
                source={{
                  uri: book.owner.photoURL,
                }}
                alt={book.owner.displayName}
              />
              <Link href='#' color={OrangeShades.primaryOrange} ml='5px'>
                {book.owner.displayName}
              </Link>
            </HStack>
          </Box>
        </HStack>
      </Pressable>
      {selectedTab == 'ForLater' ? (
        <Button mt='15px' onPress={handleRequestToBorrow}>
          Request to Borrow
        </Button>
      ) : (
        <Button mt='15px' onPress={handleCancelHold}>
          Cancel Hold
        </Button>
      )}
    </VStack>
  );
};

export default WishlistCard;
