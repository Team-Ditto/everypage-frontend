import { Center, HStack, Image, Text, VStack, Divider, Box } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";

const WishlistBookCard = () => {
  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          NativeBase
        </Box>
        <Box px="4">
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Box px="4" pb="4">
          GeekyAnts
        </Box>
      </VStack>
    </Box>
  );
};

const Style = StyleSheet.create({
  cardContainerStyle: {
    backgroundColor: "gray.200",
    flex: 1,
    height: "35%",
  },
});

export default WishlistBookCard;
