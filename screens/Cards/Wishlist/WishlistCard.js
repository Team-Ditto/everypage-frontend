import {
    Box,
    AspectRatio,
    Image,
    VStack,
    Text,
    Pressable,
    Button,
    IconButton,
    Icon,
    HStack,
  } from "native-base";
  import { MaterialIcons } from "@expo/vector-icons";
  import { TouchableOpacity } from "react-native";
  import { useEffect, useState } from "react";
  const WishlistCard = ({ data, navigation, showWishListIcon = false }) => {
    const { title, author, imageSrc } = data;
    const [isWishlisted, setIsWishlisted] = useState(false);
  
    const HandleWishlistPress = () => {
      setIsWishlisted(!isWishlisted);
    };

    const status = [
        {
            status: "Available",
            backgroundColor: "#DCFCE7",
            textColor: "#14532D"
        },
        {
            status: "In-use",
            backgroundColor: "#FEE2E2",
            textColor: "#A01923"
        }]
  
    return (
        <VStack bgColor="#FFFFFF" borderRadius="10" w="90%" p="15px" mb="20px">
            <HStack>
                <Image
                borderRadius="10px"
                    w="40%"
                    source={{
                    uri: imageSrc,
                    }}
                    alt={title}
                />
                <Box w="55%" ml="3%">
                    <Text fontWeight="semibold" fontSize="md">{title}</Text>
                    <Text fontSize="md">{author}</Text>
                    <Box bgColor={status[1].backgroundColor} borderRadius="4px" borderColor={status[1].textColor} borderStyle="solid" borderWidth="1px" p="4px" marginY="7px" marginRight="auto">
                        <Text color={status[1].textColor}>{status[1].status}</Text>
                    </Box>
                    <Text fontSize="sm">Owned by</Text>
                    <HStack h="10">
                        <Text>Owner's pic</Text>
                        <Text>Owner's name</Text>
                    </HStack>
                </Box>
            </HStack>
            <Button mt="15px">Request to Borrow</Button>
        </VStack>
    );
  };
  
  export default WishlistCard;
  