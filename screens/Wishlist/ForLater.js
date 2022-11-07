import React, { useState, useEffect } from 'react';
import { Text, Box, VStack, ScrollView } from 'native-base';
import WishlistCard from '../Cards/Wishlist/WishlistCard';
import { WishlistData } from '../../constants/WishlistData';
import { getWishlistsByStatus } from '../../services/wishlists-service';

export default function ForLater({ navigation }) {
  const [wishlistData, setWishlistData] = useState(WishlistData);

  useEffect(() => {
    async function fetchData() {
      getWishlistsByStatus('For Later').then(wishlist => {
        setWishlistData(wishlist.data);
        // setSpinnerVisible(false);
      });
    }
    fetchData();
  }, []);

  return (
    <VStack>
      <Text fontSize='lg' fontWeight='800' ml='4%' mt='23px' mb='16px'>
        For Later ({wishlistData?.length || 0})
      </Text>
      <ScrollView>
        <Box w='100%' flexDirection='row' flexWrap='wrap' justifyContent='center'>
          {wishlistData?.map((data, id) => {
            return <WishlistCard key={id} data={data} navigation={navigation} />;
          })}
        </Box>
      </ScrollView>
    </VStack>
  );
}
