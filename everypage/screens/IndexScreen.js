import { AntDesign } from "@expo/vector-icons";
import { Fab, Icon, Text, VStack } from "native-base";
import { useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import BottomTab from "./Assets/BottomTab";
import Home from "./Main/Index";

const IndexScreen = ({ navigation }) => {
  useEffect(() => {
    //over here right now I am doing as per wireframes
    // but when we get user from backend we will have
    // user name setup  for the user.
    //=============================
    navigation.setOptions({
      title: "Mita's Library",
      //  value === "" ? "No title" : value,
    });
    // =============================
  }, [navigation]);
  return (
    <VStack style={Style.mainContainerStyle} bg="muted.50">
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
        bottom={5}
        icon={<Icon color="black" as={AntDesign} name="plus" size="sm" />}
      />
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
