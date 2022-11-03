import { Box, AspectRatio, Image, VStack, Text, Pressable, Button, IconButton, Icon, HStack, Link } from 'native-base';
const WishlistCard = ({ data, navigation, showWishListIcon = false }) => {
  const { title, author, images, owner, ownerPicture, status } = data;

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
    case 'Available':
      curStyle = statusStyle[0];
      break;

    case 'In-use':
      curStyle = statusStyle[1];
      break;

    default:
      console.log('Book status not available');
  }

  return (
    <VStack bgColor='#FFFFFF' borderRadius='10' mx='4%' p='15px' mb='20px'>
      <HStack>
        <Image
          borderRadius='10px'
          w='40%'
          source={{
            uri: images[0],
          }}
          alt={title}
        />
        <Box w='55%' ml='3%'>
          <Text fontWeight='semibold' fontSize='md'>
            {title}
          </Text>
          <Text fontSize='md'>{author}</Text>
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
                uri: ownerPicture,
              }}
              alt={owner}
            />
            <Link href='https://nativebase.io' ml='5px'>
              {owner}
            </Link>
          </HStack>
        </Box>
      </HStack>
      <Button mt='15px'>Request to Borrow</Button>
    </VStack>
  );
};

export default WishlistCard;
