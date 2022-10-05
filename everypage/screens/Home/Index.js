import { VStack, Text } from "native-base";
import BottomTab from "../Assets/BottomTab";
import Search from "../Assets/Search";

const Home = ({ navigation }) => {
  return (
    <VStack>
      <Search navigation={navigation} />
      <BottomTab  navigation={navigation} />
    </VStack>
  );
};


export default Home;
