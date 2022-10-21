import { VStack, Text, Box, Button } from "native-base";
import Search from "../Assets/Search";
import { ScrollView } from "react-native";
import { useState } from "react";

import { LibraryData } from "../../constants/LibraryData";
import MyLibraryCard from "../Cards/Library/MyLibraryCard";
import FloatingButtons from "../Assets/FloatingButtons";

const Home = ({ navigation }) => {
  const [libData, setLibData] = useState(LibraryData);

  const genreData = [
    "Art",
    "Crime",
    "Fiction",
    "Biology",
    "Art",
    "Crime",
    "Fiction",
    "Biology"
  ];

  return (
    <VStack>
      {/* Search component */}
      <Search navigation={navigation} />
      {/* button slider */}
      <Text m={2}>Genre</Text>
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

      {/* My Library Data Collection */}
      <Text mx={2} my={2}>
        All ({libData.length})
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
          {libData.map((data, id) => {
            return (
              <MyLibraryCard key={id} data={data} navigation={navigation} />
            );
          })}
        </Box>
      </ScrollView>
      <FloatingButtons navigation={navigation} />
    </VStack>
  );
};

export default Home;
