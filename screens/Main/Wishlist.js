import { VStack, Text, Center, Box, HStack, Button } from "native-base";
import React, { useState } from "react";
import Search from "../Assets/Search";
import ForLater from "../Wishlist/ForLater";
import Requested from "../Wishlist/Requested";

import { LibraryData } from "../../constants/LibraryData";

export default function Wishlist({ navigation }) {
  const [libData, setLibData] = useState(LibraryData);
  const [isForLater, setIsForLater] = useState(true);

  function handleInput(v) {
    setIsForLater(v);
  }

  return (
    <VStack>
      <Search navigation={navigation} />

      <HStack>
        <Button onPress={() => handleInput(true)}>
          For Later
        </Button>
        <Button onPress={() => handleInput(false)}>
          Requested
        </Button>
      </HStack>
      <VStack>
        <Box>
          { isForLater ? <ForLater libData={libData} /> : <Requested libData={libData} /> } 
        </Box>
      </VStack>
    </VStack>
  );

}