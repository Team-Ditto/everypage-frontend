import { IconButton, Icon, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlueShades } from '../../assets/style/color';

const WishlistButton = (props, navigation) => {
  const { isWishlisted, handleWishlistPress } = props;

  return (
    <>
      <Box
        m={2}
        p={0}
        w='32px'
        h='32px'
        bg={isWishlisted ? BlueShades.primaryBlue : BlueShades.tertiaryBlue}
        borderRadius='full'
        shadow={3}
      >
        <IconButton
          variant='ghost'
          onPress={handleWishlistPress}
          icon={
            <Icon
              size='xl'
              onPress={handleWishlistPress}
              style={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                position: 'relative',
                bottom: 5,
                left: 4,
              }}
              as={
                <TouchableOpacity>
                  {isWishlisted ? (
                    <Ionicons name='bookmark' size={20} color={BlueShades.tertiaryBlue} />
                  ) : (
                    <Ionicons name='bookmark-outline' size={20} color={BlueShades.primaryBlue} />
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
