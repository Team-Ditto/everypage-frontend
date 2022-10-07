import { VStack, Text, Button } from "native-base";
import BottomTab from "../Assets/BottomTab";
import Search from "../Assets/Search";

const Home = ({ navigation }) => {
  return (
    <VStack>
      <Search navigation={navigation} />
      <Button
        onPress={() => {
          navigation.navigate("SingleBook");
        }}
      >
        Go To Single Page
      </Button>
    </VStack>
  );
};

export default Home;
