import { Box, AspectRatio, Image, VStack, Text, Pressable } from 'native-base';
import { useState } from 'react';
import WishlistButton from '../../Assets/WishlistButton';
const MyLibraryCard = ({ data, navigation, showWishListIcon = false }) => {
  const { title, author, imageSrc } = data;
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistPress = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SingleView', {
          bookData: data,
          isWishlisted: isWishlisted,
          setIsWishlisted: setIsWishlisted,
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
              source={{
                uri: imageSrc,
              }}
              alt={title}
            />
            {showWishListIcon ? (
              <Box
                mt={2}
                mr={2}
                bg={isWishlisted ? 'black' : 'white'}
                position='absolute'
                borderRadius='full'
                right='0'
              >
                <WishlistButton isWishlisted={isWishlisted} handleWishlistPress={handleWishlistPress} />
              </Box>
            ) : (
              ''
            )}
          </VStack>
        </AspectRatio>
        <Box pt={1} pb={3}>
          <VStack>
            <Text fontWeight='semibold'>{title}</Text>
            <Text>{author}</Text>
          </VStack>
        </Box>
      </VStack>
    </Pressable>
  );
};

export default MyLibraryCard;
