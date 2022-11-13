import { IconButton, Icon, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlueShades } from '../../assets/style/color';

const WishlistButton = (props, navigation) => {
  const { isWishlisted, handleWishlistPress } = props;

  return (
    <>
      <Box m={2} bg={isWishlisted ? BlueShades.primaryBlue : 'white'} borderRadius='full' shadow={3}>
        <IconButton
          variant='ghost'
          onPress={handleWishlistPress}
          icon={
            <Icon
              size='xl'
              onPress={handleWishlistPress}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              as={
                <TouchableOpacity>
                  {isWishlisted ? (
                    <Ionicons name='bookmark' size={30} color={'white'} />
                  ) : (
                    <Ionicons name='bookmark-outline' size={30} color={BlueShades.primaryBlue} />
                  )}
                </TouchableOpacity>
              }
            />
          }
        />
      </Box>
    </>
  );
};

export default WishlistButton;
