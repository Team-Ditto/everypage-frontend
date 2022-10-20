import { VStack, Text, Center, Box, HStack, Button } from "native-base";
import React from "react";
import { useState } from "react";
import Search from "../Assets/Search";

import { LibraryData } from "../../constants/LibraryData";

export default function Wishlist({ navigation }) {
  const [libData, setLibData] = useState(LibraryData);

  return (
    <VStack>
      <Search navigation={navigation} />

      <HStack>
        <Button>
          For Later
        </Button>
        <Button>
          Requested
        </Button>
      </HStack>

      { /* curScreen="forLater" ? <ForLater /> : <Requested /> */ } 

      <Text>Wishlist</Text>
    </VStack>
  );

}