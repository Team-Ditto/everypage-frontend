import { Box, AspectRatio, Image, VStack, Text, Pressable, Button, IconButton, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
const MyLibraryCard = ({ data, navigation, showWishListIcon = false }) => {
  const { title, author, images } = data;
  console.log('IMAGE', data.images);
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
                uri: images[0],
              }}
              alt={title}
            />
            {showWishListIcon ? (
              <Box mt={2} mr={2} bg='muted.50' position='absolute' borderRadius='full' right='0'>
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
                            <MaterialIcons name='favorite' size={30} color='black' />
                          ) : (
                            <MaterialIcons name='favorite-border' size={30} color='black' />
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
