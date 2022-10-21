import React, { useState } from "react";
import Search from "../Assets/Search";
import {
  Box,
  Text,
  Button,
  ScrollView,
  VStack,
  HStack,
  Icon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { LibraryData } from "../../constants/LibraryData";
import MyLibraryCard from "../Cards/Library/MyLibraryCard";

export default function Discover({ navigation }) {
  const [similarBookData, setSimilarBookData] = useState(LibraryData);

  const genreData = [
    "Art",
    "Crime",
    "Fiction",
    "Biology",
    "Art",
    "Crime",
    "Fiction",
    "Biology",
  ];

  return (
    <VStack>
      {/* Search component */}
      <Search navigation={navigation} />

      {/* Genre Generation */}
      <HStack style={{ display: "flex", justifyContent: "space-between" }}>
        <Text m={2} fontSize="md">
          Genre
        </Text>
        <Button
          variant="unstyled"
          endIcon={
            <Icon as={MaterialIcons} name="keyboard-arrow-right" size="md" />
          }
        >
          View All
        </Button>
      </HStack>

      <ScrollView
        style={{ display: "flex", flexDirection: "row", margin: 5 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {genreData.map((genre, idx) => {
          return (
            <Box mx={1} key={idx} h={60}>
              <Button
                px={5}
                variant={"solid"}
                color={"muted.800"}
                borderRadius="sm"
              >
                {genre}
              </Button>
            </Box>
          );
        })}
      </ScrollView>

      {/* View below the Genre Tab */}

      <Text m={2} fontWeight="bold" fontSize="2xl">
        Books you might like
      </Text>

      <ScrollView>
        <Box
          py={3}
          px={2}
          w="100%"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {similarBookData.map((data, id) => {
            return (
              <MyLibraryCard
                key={id}
                data={data}
                navigation={navigation}
                showWishListIcon={true}
              />
            );
          })}
        </Box>
      </ScrollView>
    </VStack>
  );
}