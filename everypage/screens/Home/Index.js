import { VStack, Text, Box } from "native-base";
import BottomTab from "../Assets/BottomTab";
import Search from "../Assets/Search";
import MyLibraryCard from "../Assets/Cards/MyLibraryCard";
import { ScrollView } from "react-native";
import { useState } from "react";
import { LibraryData } from "../../constants/LibraryData";

const Home = ({ navigation }) => {
  const [libData, SetLibData] = useState(LibraryData);

  return (
    <VStack>
      <Search navigation={navigation} />
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
    </VStack>
  );
};

export default Home;
