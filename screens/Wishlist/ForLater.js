import { useState, useEffect } from 'react';
import { Text, Box, VStack, ScrollView, Spinner } from 'native-base';
import WishlistCard from '../Cards/Wishlist/WishlistCard';
import { getWishlistsByStatus } from '../../services/wishlists-service';

export default function ForLater({ navigation }) {
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [wishlistData, setWishlistData] = useState();
  const selectedTab = 'ForLater';

  useEffect(() => {
    async function fetchData() {
      getWishlistsByStatus('For Later').then(wishlist => {
        setWishlistData(wishlist.data);
        setSpinnerVisible(false);
      });
    }
    fetchData();
  }, [wishlistData]);

  return (
    <VStack>
      <Text fontSize='lg' fontWeight='800' ml='4%' mt='23px' mb='16px'>
        For Later ({wishlistData?.length || 0})
      </Text>
      <ScrollView>
        <Box w='100%' flexDirection='row' flexWrap='wrap' justifyContent='center'>
          {wishlistData ? (
            wishlistData?.map((data, id) => {
              return <WishlistCard key={id} data={data} navigation={navigation} selectedTab={selectedTab} />;
            })
          ) : (
            <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
          )}
        </Box>
      </ScrollView>
    </VStack>
  );
}
