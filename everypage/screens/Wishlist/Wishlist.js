import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Fab, Center, Text, VStack, Icon, View } from "native-base";
import { Button, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BottomTab from "../Assets/BottomTab";
import Home from "../Home/Index";
import ForLater from "./ForLater";
import Requested from "./Requested";

const Tab2 = createMaterialTopTabNavigator();

function ForLater123() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ForLater />
    </View>
  );
}

function Requested123() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Requested />
    </View>
  );
}

const Wishlist = ({ navigation }) => {
  return (
    <VStack style={Style.mainContainerStyle}>
      <Home style={{ flex: 1 }} navigation={navigation} />
      <Tab2.Navigator>
        <Tab2.Screen name="For Later" component={ForLater123} />
        <Tab2.Screen name="Requested" component={Requested123} />
      </Tab2.Navigator>
      <Text mx={2} my={2}>
        All (3)
      </Text>
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

export default Wishlist;
