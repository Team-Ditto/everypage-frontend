import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text, Center, Box, HStack, Button } from 'native-base';

import Search from '../Assets/Search';
import ForLater from '../Wishlist/ForLater';
import Requested from '../Wishlist/Requested';

import { LibraryData } from '../../constants/LibraryData';
import Filter from '../Assets/FilterSettings/Filter';

export default function Wishlist({ navigation }) {
  const [libData, setLibData] = useState(LibraryData);
  const [isForLater, setIsForLater] = useState(true);
  const [isFilterVisible, setFilterVisible] = useState(false);

  function handleInput(v) {
    setIsForLater(v);
  }
  const onFilterClicked = () => {
    setFilterVisible(!isFilterVisible);
  };
  return (
    <VStack>
      <Box display='flex' width='100%' mt={2}>
        <HStack display='flex' justifyContent='center' alignItems='center'>
          <Search navigation={navigation} onFilterClicked={onFilterClicked} />
          <Filter />
        </HStack>
      </Box>
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
        <Box>{isForLater ? <ForLater libData={libData} /> : <Requested libData={libData} />}</Box>
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
