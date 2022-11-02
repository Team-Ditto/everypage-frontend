import { IconButton, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WishlistButton = props => {
  const { handleWishlistPress, isWishlisted } = props;
  return (
    <>
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
                  <Ionicons name='bookmark' size={30} color='red' />
                ) : (
                  <Ionicons name='bookmark-outline' size={30} color='red' />
                )}
              </TouchableOpacity>
            }
          />
        }
      />
    </>
  );
};

export default WishlistButton;
