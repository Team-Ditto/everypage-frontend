import React, { PureComponent } from "react";
import { Input, Icon, Button, HStack } from "native-base";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const SearchTab = () => {
  return (
    <>
      <HStack width="100%" justifyContent="center" mt="2">
        <Input
          placeholder="Search by Book Name"
          borderRadius="4"
          margin="1"
          width="80%"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={Ionicons}
              name="ios-search"
            />
          }
          InputRightElement={
            <Icon
              m="2"
              mr="3"
              size="6"
              color="gray.400"
              as={AntDesign}
              name="qrcode"
            />
          }
        />
        <Button margin="1">
          <AntDesign name="filter" size={24} color="white" />
        </Button>
      </HStack>
    </>
  );
};

export default SearchTab;
