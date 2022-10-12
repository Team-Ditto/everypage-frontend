import { VStack, Text, Box, Fab, Icon, Button } from "native-base";
import Search from "../Assets/Search";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LibraryData } from "../../constants/LibraryData";
import MyLibraryCard from "../Cards/Library/MyLibraryCard";
import { AntDesign } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  const [libData, SetLibData] = useState(LibraryData);
  return (
    <VStack>
      {/* Search component */}
      <Search navigation={navigation} />

      {/* My Library Data Collection */}
      <Text mx={2} my={2}>
        All ({libData.length})
      </Text>
      <ScrollView>
        <Box
          px={2}
          py={3}
          w="100%"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
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
    bottom: 100,
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
});
export default Home;
