import { Button, Text, View } from "react-native";
import Home from "./Home/Index";

const IndexScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Everypage</Text>
      <Home navigation={navigation} />
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Login Page"
      />
    </View>
  );
};

export default IndexScreen;
