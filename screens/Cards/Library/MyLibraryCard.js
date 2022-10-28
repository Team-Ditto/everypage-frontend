import { Box, AspectRatio, Image, VStack, Text, Pressable, Button, IconButton, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
const MyLibraryCard = ({ data, navigation, showWishListIcon = false }) => {
  const { title, author, imageSrc } = data;
  const [isWishlisted, setIsWishlisted] = useState(false);

  const HandleWishlistPress = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SingleBook', {
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
                <IconButton
                  variant='ghost'
                  icon={
                    <Icon
                      color='muted.900'
                      size='xl'
                      onPress={HandleWishlistPress}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      as={
                        <TouchableOpacity>
                          {isWishlisted ? (
                            <Ionicons name='bookmark' size={30} color='white' />
                          ) : (
                            <Ionicons name='bookmark-outline' size={30} color='black' />
                          )}
                        </TouchableOpacity>
                      }
                    />
                  }
                />
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
