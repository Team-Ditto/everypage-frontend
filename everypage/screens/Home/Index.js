import { VStack, Text, Box } from "native-base";
import BottomTab from "../Assets/BottomTab";
import Search from "../Assets/Search";
import MyLibraryCard from "../Assets/Cards/MyLibraryCard";
import { ScrollView } from "react-native";

const Home = ({ navigation }) => {
  return (
    <VStack>
      <Search navigation={navigation} />
      <Text mx={2} my={2}>
        All (9)
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
          <MyLibraryCard navigation={navigation} />
          <MyLibraryCard navigation={navigation} />
          <MyLibraryCard navigation={navigation} />
          <MyLibraryCard navigation={navigation} />
          <MyLibraryCard navigation={navigation} />
          <MyLibraryCard navigation={navigation} />
          <MyLibraryCard navigation={navigation} />
          <MyLibraryCard navigation={navigation} />
        </Box>
      </ScrollView>
    </VStack>
  );
};

export default Home;
