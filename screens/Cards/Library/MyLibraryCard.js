import { Box, AspectRatio, Image, VStack, Text, Pressable, Button, IconButton, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import WishlistButton from '../../Assets/WishlistButton';
const MyLibraryCard = ({ data, navigation, showWishListIcon = false }) => {
  const { title, author, images } = data;
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistPress = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Pressable
      onPress={() => {
        showWishListIcon
          ? navigation.navigate('SingleView', {
              bookData: data,
              isWishlisted: isWishlisted,
              setIsWishlisted: setIsWishlisted,
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
              source={{
                uri: images[0],
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
