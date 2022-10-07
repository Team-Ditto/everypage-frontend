import React, { Component } from "react";
import SearchTab from "../../components/SearchTab";
import { VStack, Text } from "native-base";

const MyLibrary = ({ navigation }) => {
  return (
    <>
      <VStack>
        <SearchTab />
      </VStack>
    </>
  );
};

export default MyLibrary;
