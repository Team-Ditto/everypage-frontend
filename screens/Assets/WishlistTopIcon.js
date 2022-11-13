import { useState, useContext } from 'react';
import { IconButton, Icon, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlueShades } from '../../assets/style/color';
import { createNewWishlist, deleteWishlistByBookId } from '../../services/wishlists-service';
import { AuthContext } from '../../contexts/AuthContext';

const WishlistTopIcon = ({ isWishlistedOld, data }) => {
  const [isWishlisted, setIsWishlisted] = useState(isWishlistedOld);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleDeleteWishlist = wishlist => {
    const filteredWishlists = currentUser.wishlists.filter(item => item._id !== wishlist._id);
    setCurrentUser({ ...currentUser, wishlists: filteredWishlists });
  };

  const handleCreateWishlist = newWishlist => {
    setCurrentUser({ ...currentUser, wishlists: [...currentUser.wishlists, newWishlist] });
  };

  const handleWishlistPress = async () => {
    if (!isWishlisted) {
      // we have to create a new wishlist
      const newWishlist = {
        book: data._id,
      };

      // call the API to create the new wishlist
      const createdWishlist = await createNewWishlist(newWishlist);

      handleCreateWishlist(createdWishlist);

      setIsWishlisted(true);
    } else {
      const removedWishlist = await deleteWishlistByBookId(data._id);

      handleDeleteWishlist(removedWishlist);

      setIsWishlisted(false);
    }
  };

  return (
    <>
      <IconButton
        variant='ghost'
        icon={
          <Icon
            size='xl'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleWishlistPress}
            as={
              <TouchableOpacity>
                {isWishlisted ? (
                  <Ionicons name='bookmark' size={30} color={BlueShades.primaryBlue} />
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

export default WishlistTopIcon;
