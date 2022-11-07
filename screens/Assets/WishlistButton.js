import { IconButton, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlueShades, WhiteShades } from '../../assets/style/color';
import { useState } from 'react';

const WishlistButton = (props, route, navigation) => {
  const { onHeader = false, isWishlisted, handleWishlistPress } = props;
  const [wishlistStatus, setWishlistStatus] = useState(isWishlisted);

  const handleWishlistPressed = () => {
    setWishlistStatus(prev => !prev);
    handleWishlistPress ? handleWishlistPress() : '';
  };

  return (
    <>
      <IconButton
        variant='ghost'
        onPress={handleWishlistPressed}
        icon={
          <Icon
            size='xl'
            onPress={handleWishlistPressed}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            as={
              <TouchableOpacity>
                {isWishlisted || wishlistStatus ? (
                  <Ionicons name='bookmark' size={30} color={onHeader ? BlueShades.primaryBlue : 'white'} />
                ) : (
                  <Ionicons name='bookmark-outline' size={30} color={BlueShades.primaryBlue} />
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
