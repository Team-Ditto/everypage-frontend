import { Button, Text, View } from "react-native";

const IndexScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Everypage</Text>
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
