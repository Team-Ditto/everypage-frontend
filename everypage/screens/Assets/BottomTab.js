import {
  MaterialIcons,
  AntDesign,
  Fontisto,
  FontAwesome,
} from "@expo/vector-icons";
import {
  Input,
  Box,
  Icon,
  IconButton,
  HStack,
  Button,
  VStack,
  Text,
} from "native-base";
import { StyleSheet } from "react-native";

const BottomTab = ({ navigation }) => {
  // we can use the navigation to navigate to the next pages
  return (
    <HStack style={Styles.hContainerStyle}>
      <VStack ml={2}>
        <IconButton
          icon={
            <Icon
              size="xl"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              as={<MaterialIcons name="library-books" size={34} />}
            />
          }
        />
        <Text>Library</Text>
      </VStack>
      <VStack>
        <IconButton
          colorScheme="muted"
          icon={
            <Icon
              size="xl"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              as={<MaterialIcons name="favorite" size={34} color="black" />}
            />
          }
        />
        <Text>Wishlist</Text>
      </VStack>
      <VStack>
        <IconButton
          colorScheme="muted"
          icon={
            <Icon
              size="xl"
              as={<Fontisto name="world-o" size={34} color="black" />}
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
        <Text>Discover</Text>
      </VStack>
      <VStack>
        <IconButton
          colorScheme="muted"
          icon={
            <Icon
              size="xl"
              as={<FontAwesome name="group" size={34} color="black" />}
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
        <Text>Community</Text>
      </VStack>
      <VStack>
        <IconButton
          colorScheme="muted"
          icon={
            <Icon
              size="xl"
              as={<AntDesign name="user" size={34} color="black" />}
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
        <Text>Profile</Text>
      </VStack>
    </HStack>
  );
};

const Styles = StyleSheet.create({
  hContainerStyle: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});

export default BottomTab;
