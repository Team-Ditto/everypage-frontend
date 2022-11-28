import { useState, useEffect } from 'react';
import { Text, Box, VStack, ScrollView, Spinner } from 'native-base';
import WishlistCard from '../Cards/Wishlist/WishlistCard';
import { getWishlistsByStatus } from '../../services/wishlists-service';

export default function ForLater({ navigation, handleInput }) {
  const [isSpinnerVisible, setSpinnerVisible] = useState(false);
  const [wishlistData, setWishlistData] = useState();
  const selectedTab = 'ForLater';

  useEffect(() => {
    fetchData();

    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  async function fetchData() {
    setSpinnerVisible(true);
    getWishlistsByStatus('For Later')
      .then(wishlist => {
        setWishlistData(wishlist.data);
      })
      .finally(() => setSpinnerVisible(false));
  }

  const goToRequested = () => {
    handleInput(false);
  };

  return (
    <VStack>
      <Text fontSize='lg' fontWeight='800' ml='4%' mt='23px' mb='16px'>
        For Later ({wishlistData?.length || 0})
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
                  handleInput={goToRequested}
                  fetchData={fetchData}
                />
              );
            })}
        </Box>
      </ScrollView>
    </VStack>
  );
}
