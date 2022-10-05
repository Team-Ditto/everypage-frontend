import { VStack, Text } from "native-base";
import Search from "../Assets/Search";

const Home = ({ navigation }) => {
  return (
    <VStack>
      <Search navigation={navigation} />
    </VStack>
  );
};

export default Home;
