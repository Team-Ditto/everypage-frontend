import { VStack, HStack, Box, Text, Heading, Badge, Avatar } from 'native-base';
import Carousel from '../../Assets/Carousel';

const SingleView = ({ navigation, route }) => {
  const bookData = route.params.bookData;
  const { images, title, author, owner, genre, edition, language, isbn, condition } = bookData;

  return (
    <>
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
            <HStack>
              <VStack w='80%'>
                <Heading>{title}</Heading>
                <Text>{author}</Text>
              </VStack>
              <Box w='20%'>
                <Badge colorScheme='success'>Available</Badge>
              </Box>
            </HStack>
            <HStack mb={5} mt={3} alignItems='center'>
              <Text>Owned by</Text>
              <Avatar
                size='sm'
                w='30px'
                mr={2}
                ml={4}
                source={{
                  uri: owner.photoURL,
                }}
              />
              <Text>{owner.displayName}</Text>
            </HStack>
            <Box borderRadius='10px' backgroundColor='purple.200' p={5}>
              <Text fontWeight='bold' fontSize='md'>
                Details
              </Text>
              <VStack px={3} pt={1}>
                <HStack justifyContent='space-between'>
                  <Text>Genre</Text>
                  <Text>{genre}</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text>Edition</Text>
                  <Text>{edition}</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text>Language</Text>
                  <Text>{language}</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text>ISBN</Text>
                  <Text>{isbn}</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text>Condition</Text>
                  <Text>{condition}</Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default SingleView;
