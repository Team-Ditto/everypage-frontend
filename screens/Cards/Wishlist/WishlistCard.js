import { Box, Image, VStack, Text, Pressable, Button, HStack, Link } from 'native-base';
import { InUseColor, OnHoldColor, SuccessColor } from '../../../assets/style/color';

const WishlistCard = ({ data, navigation, showWishListIcon = false, selectedTab }) => {
  const { book } = data;

  let curStyle = {};

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
      console.log('Setting curStyle to ' + curStyle.status);
      break;

    case 'In-Use':
      curStyle = statusStyle[1];
      console.log('Setting curStyle to ' + curStyle.status);
      break;

    case 'On-Hold':
      curStyle = statusStyle[2];
      console.log('Setting curStyle to ' + curStyle.status);
      break;

    default:
      console.log('Book status not available');
  }

  return (
    <VStack bgColor='#FFFFFF' borderRadius='10' mx='4%' p='15px' mb='20px'>
      <Pressable
        onPress={() => {
          navigation.navigate('SingleView', {
            bookData: book,
          });
        }}
        alignItems='center'
        mx={1}
      >
        <HStack>
          <Image
            borderRadius='10px'
            w='40%'
            source={{
              uri: book.images[0],
            }}
            alt={book.title}
          />
          <Box w='55%' ml='3%'>
            <Text fontWeight='semibold' fontSize='md'>
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
              <Link href='https://nativebase.io' ml='5px'>
                {book.owner.displayName}
              </Link>
            </HStack>
          </Box>
        </HStack>
      </Pressable>
      {selectedTab == 'ForLater' ? (
        <Button mt='15px'>Request to Borrow</Button>
      ) : (
        <Button mt='15px'>Cancel Hold</Button>
      )}
    </VStack>
  );
};

export default WishlistCard;
