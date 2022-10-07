import { Button, Text, View } from "react-native";
import MyLibrary from "./myLibrary/MyLibrary";

const IndexScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text>Welcome to Everypage</Text>
        <Button
          onPress={() => {
            navigation.navigate("Login");
          }}
          title="Login Page"
        />
        <Button
          onPress={() => {
            navigation.navigate("My Library");
          }}
          title="My Library"
        />
      </View>
    </>
  );
};

export default IndexScreen;
