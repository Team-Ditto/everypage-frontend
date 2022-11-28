import { useState, useEffect } from 'react';
import { Text, Box, VStack, ScrollView, Spinner } from 'native-base';
import WishlistCard from '../Cards/Wishlist/WishlistCard';
import { getWishlistsByStatus } from '../../services/wishlists-service';

export default function Requested({ navigation, handleInput }) {
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [wishlistData, setWishlistData] = useState();
  const selectedTab = 'Requested';

  useEffect(() => {
    fetchData();

    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  async function fetchData() {
    setSpinnerVisible(true);
    getWishlistsByStatus('Requested')
      .then(wishlist => {
        setWishlistData(wishlist.data);
        setSpinnerVisible(false);
      })
      .finally(() => setSpinnerVisible(false));
  }

  const goToForLater = () => {
    handleInput(true);
  };

  return (
    <VStack>
      <Text fontSize='lg' fontWeight='800' ml='4%' mt='23px' mb='16px'>
        Requested ({wishlistData?.length || 0})
      </Text>
      {isSpinnerVisible && <Spinner textContent={'Loading...'} textStyle={{ color: '#FFF' }} marginBottom={5} />}
      <ScrollView>
        <Box w='100%' flexDirection='row' flexWrap='wrap' justifyContent='center' mb={20}>
          {wishlistData &&
            wishlistData?.map((data, id) => {
              return (
                <WishlistCard
                  key={id}
                  data={data}
                  navigation={navigation}
                  selectedTab={selectedTab}
                  handleInput={goToForLater}
                  fetchData={fetchData}
                />
              );
            })}
        </Box>
      </ScrollView>
    </VStack>
  );
}
