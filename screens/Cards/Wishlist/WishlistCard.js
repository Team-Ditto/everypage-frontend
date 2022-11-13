import { Box, Image, VStack, Text, Pressable, Button, HStack, Link } from 'native-base';
import { OrangeShades } from '../../../assets/style/color';

const WishlistCard = ({ data, navigation, showWishListIcon = false }) => {
  const { book, status } = data;

  let curStyle = {};

  const statusStyle = [
    {
      status: 'Available',
      backgroundColor: '#DCFCE7',
      textColor: '#14532D',
    },
    {
      status: 'In-use',
      backgroundColor: '#FEE2E2',
      textColor: '#A01923',
    },
  ];

  switch (status) {
    //WORK IN PROGRESS
    //Have to add a status of available or not on the object
    case 'For Later':
      curStyle = statusStyle[0];
      break;

    case 'Recommended':
      curStyle = statusStyle[1];
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
              <Text color={curStyle.textColor}>{curStyle.status}</Text>
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
      <Button mt='15px'>Request to Borrow</Button>
    </VStack>
  );
};

export default WishlistCard;
