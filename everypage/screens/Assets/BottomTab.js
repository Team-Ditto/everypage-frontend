import {
  MaterialIcons,
  AntDesign,
  Fontisto,
  FontAwesome,
} from "@expo/vector-icons";
import { Input, Box, Icon, IconButton, HStack } from "native-base";

const BottomTab = ({ navigation }) => {
  // we can use the navigation to navigate to the next pages
  return (
    <HStack mt={5}>
      <IconButton
        icon={
          <Icon
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            as={<MaterialIcons name="library-books" size={24} />}
          />
        }
      />
      <IconButton
        colorScheme="muted"
        icon={
          <Icon
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            as={<MaterialIcons name="favorite" size={24} color="black" />}
          />
        }
      />
      <IconButton
        colorScheme="muted"
        icon={
          <Icon
            size="lg"
            as={<Fontisto name="world-o" size={24} color="black" />}
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          />
        }
      />
      <IconButton
        colorScheme="muted"
        icon={
          <Icon
            size="lg"
            as={<FontAwesome name="group" size={24} color="black" />}
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          />
        }
      />
      <IconButton
        colorScheme="muted"
        icon={
          <Icon
            size="lg"
            as={<AntDesign name="user" size={24} color="black" />}
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          />
        }
      />
    </HStack>
  );
};

export default BottomTab;
