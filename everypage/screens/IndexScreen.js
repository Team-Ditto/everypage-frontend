import { AntDesign } from "@expo/vector-icons";
import { Fab, Icon, Text, VStack } from "native-base";
import { Button, StyleSheet } from "react-native";
import BottomTab from "./Assets/BottomTab";
import Home from "./Home/Index";

const IndexScreen = ({ navigation }) => {
  return (
    <VStack style={Style.mainContainerStyle}>
      <Home style={{ flex: 1 }} navigation={navigation} />
      <Text mx={2} my={2}>
        All (9)
      </Text>
      <Button
        style={{ flex: 2 }}
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Login Page"
      />
      <Fab
        renderInPortal={false}
        shadow={2}
        variant="solid"
        bg="muted.50"
        bottom={95}
        icon={<Icon color="black" as={AntDesign} name="plus" size="sm" />}
      />
      <BottomTab style={Style.bottomTabStyle} navigation={navigation} />
    </VStack>
  );
};

const Style = StyleSheet.create({
  mainContainerStyle: {
    position: "relative",
    flex: 1,
    height: "100%",
  },
});

export default IndexScreen;
