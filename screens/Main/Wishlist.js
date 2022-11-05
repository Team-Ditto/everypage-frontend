import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text, Center, Box, HStack, Button } from 'native-base';

import Search from '../Assets/Search';
import ForLater from '../Wishlist/ForLater';
import Requested from '../Wishlist/Requested';

//import { WishlistData } from '../../constants/WishlistData';
import { getWishlistsByStatus } from '../../services/wishlists-service';

export default function Wishlist({ navigation }) {
  //const [wishlistData, setWishlistData] = useState(WishlistData);
  const [isForLater, setIsForLater] = useState(true);
  const [status, setStatus] = useState('For Later');

  function handleInput(value) {
    setIsForLater(value);
  }

  /* useEffect(() => {
    if (isForLater) {
      setStatus('For Later');
    } else {
      setStatus('Requested');
    }
    async function fetchData() {
      getWishlistsByStatus(status).then(wishlist => {
        setWishlistData(wishlist.data);
        // setSpinnerVisible(false);
      });
    }
    fetchData();
  }, [isForLater]); */

  return (
    <VStack>
      <Search navigation={navigation} />
      <Box
        backgroundColor='#FDF5EA'
        mx='4%'
        mt='18px'
        borderRadius='10px'
        borderColor='#DC924D'
        borderStyle='solid'
        borderWidth='1px'
      >
        {isForLater ? (
          <HStack display='flex' flexDirection='row'>
            <Button backgroundColor='#DC924D' flexGrow={true} borderRadius='10px' onPress={() => handleInput(true)}>
              For Later
            </Button>
            <Button
              backgroundColor='#FDF5EA'
              _text={{ color: '#DC924D' }}
              flexGrow={true}
              borderRadius='10px'
              onPress={() => handleInput(false)}
            >
              Requested
            </Button>
          </HStack>
        ) : (
          <HStack display='flex' flexDirection='row'>
            <Button
              backgroundColor='#FDF5EA'
              _text={{ color: '#DC924D' }}
              flexGrow={true}
              borderRadius='10px'
              onPress={() => handleInput(true)}
            >
              For Later
            </Button>
            <Button backgroundColor='#DC924D' flexGrow={true} borderRadius='10px' onPress={() => handleInput(false)}>
              Requested
            </Button>
          </HStack>
        )}
      </Box>
      <VStack>
        <Box>
          {isForLater ? (
            <ForLater navigation={navigation} /* wishlistData={wishlistData} */ />
          ) : (
            <Requested navigation={navigation} /* wishlistData={wishlistData} */ />
          )}
        </Box>
      </VStack>
    </VStack>
  );
}

const Styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: '#DC924D',
    flexGrow: true,
    borderRadius: '10px',
  },
  buttonInactive: {
    backgroundColor: '#FDF5EA',
    color: '#DC924D',
    flexGrow: true,
    borderRadius: '10px',
  },
});
