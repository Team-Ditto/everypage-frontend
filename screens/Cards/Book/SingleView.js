// import { Carousel } from 'antd';
import { Image, VStack, HStack, Box, Text, Heading, Badge, Avatar } from 'native-base';
import { height } from 'dom-helpers';

const SingleView = ({ navigation, route }) => {
  const bookData = route.params.bookData;
  return (
    <>
      <VStack>
        <Box h='350px'>
          {/* <Carousel>
        {bookData.imageSrc.map((img)=>(
          <Image src={img} />
        ))}
      </Carousel> */}
          <Image
            w='100%'
            h='100%'
            source={{
              uri: bookData.images[0],
            }}
            alt='book cover'
          />
        </Box>
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
                <Heading>{bookData.title}</Heading>
                <Text>{bookData.author}</Text>
              </VStack>
              <Box w='20%'>
                <Badge colorScheme='success'>Available</Badge>
              </Box>
            </HStack>
            <Text my={5}>
              Owned by{'   '}
              <Avatar
                size='sm'
                w='30px'
                bg='green.900'
                source={{
                  uri: 'https://bit.ly/broken-link',
                }}
              >
                RW
              </Avatar>{' '}
              Ron Weasley
            </Text>
            <Box borderRadius='10px' backgroundColor='purple.200' p={5}>
              <Text fontWeight='bold' fontSize='md'>
                Details
              </Text>
              <VStack px={3} pt={1}>
                <HStack justifyContent='space-between'>
                  <Text>Genre</Text>
                  <Text>xoxo</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text>Edition</Text>
                  <Text>xoxoxo</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text>Language</Text>
                  <Text>oxo</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text>ISBN</Text>
                  <Text>xoxoXOXOXOxo</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text>Condition</Text>
                  <Text>xoxoxo</Text>
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
