import { Input, Box, Icon, IconButton, HStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Search = ({ navigation }) => {
  return (
    <Box display="flex" width="100%" mt={2}>
      <HStack display="flex" justifyContent="center" alignItems="center">
        <Input
          ml={2}
          width="85%"
          variant="rounded"
          InputLeftElement={
            <Icon as={<Ionicons name="search" />} size={5} ml="2" />
          }
          InputRightElement={
            <Icon
              as={<Ionicons name="barcode" />}
              size={8}
              ml="2"
              mr="2"
              onPress={() => {
                console.log("Open the barcode scanner");
              }}
            />
          }
          placeholder="Search"
        />

        <IconButton
          ml={2}
          mr={2}
          height="34px"
          variant="solid"
          icon={
            <Icon
              size="md"
              as={<Ionicons name="filter-outline" size={24} color="black" />}
              color="white"
            />
          }
        />
      </HStack>
    </Box>
  );
};

export default Search;
