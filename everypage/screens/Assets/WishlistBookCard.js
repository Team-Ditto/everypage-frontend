import {
  Image,
  Text,
  VStack,
  Divider,
  Box,
  Heading,
  Button,
  HStack,
} from "native-base";
import { StyleSheet } from "react-native";
import React from "react";

const WishlistBookCard = (props) => {
  const { bookName, owner, author, status, bookCover } = props;

  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <HStack>
          <Box px="4" pt="4">
            <Image
              alt={bookName + " cover"}
              source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
              size="xl"
            />
          </Box>
          <Box>
            <Heading>{bookName}</Heading>
            <Text>{author}</Text>
            <Text>{owner}</Text>
            <Button>{status}</Button>
          </Box>
        </HStack>
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
