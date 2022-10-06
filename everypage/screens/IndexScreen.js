import { Button, StyleSheet, Text, View } from "react-native";
import BottomTab from "./Assets/BottomTab";
import Home from "./Home/Index";

const IndexScreen = ({ navigation }) => {
  return (
    <View style={Style.mainContainerStyle}>
      <Text>Welcome to Everypage</Text>

      <Home style={{ flex: 1 }} navigation={navigation} />
      <Button
        style={{ flex: 2 }}
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Login Page"
      />
      <BottomTab style={Style.bottomTabStyle} navigation={navigation} />
    </View>
  );
};

const Style = StyleSheet.create({
  bottomTabStyle: {
    position: "absolute",
    bottom: 0,
    flex: 3,
  },
  mainContainerStyle: {
    position: "relative",
    flex: 1,
    height: "100%",
  },
});

export default IndexScreen;
