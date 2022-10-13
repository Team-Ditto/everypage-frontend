import { VStack, Text, Box, Fab, Icon, Button } from "native-base";
import Search from "../Assets/Search";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LibraryData } from "../../constants/LibraryData";
import MyLibraryCard from "../Cards/Library/MyLibraryCard";
import { AntDesign } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  const [libData, SetLibData] = useState(LibraryData);
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
      <Button
        style={Styles.floatingBtnStyle}
        onPress={() => {
          navigation.navigate("AddBook");
        }}
      >
        <Icon color="grey" as={<AntDesign name="plus" />} size="sm" />
      </Button>
    </VStack>
  );
};

const Styles = StyleSheet.create({
  floatingBtnStyle: {
    backgroundColor: "white",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    bottom: 200,
    width: 55,
    height: 55,
    right: 10,
    borderColor: "grey",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  buttonSliderContainer: {
    display: "flex",
    flexDirection: "row",
    width: "10",
  },
});
export default Home;
