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
  
    return (
/*       <Pressable
        onPress={() => {
          navigation.navigate("SingleBook", {
            libCardData: data,
          });
        }}
        alignItems="center"
        w="100%"
        mx={1}
      > */
        <VStack>
            <HStack >
                <Image
                    w="40%"
                    h="50%"
                    source={{
                    uri: imageSrc,
                    }}
                    alt={title}
                />
                <Box w="55%" ml="3%">
                    <Text fontWeight="semibold">{title}</Text>
                    <Text>{author}</Text>
                    <Button>Condition</Button>
                    <Text>Owned by</Text>
                    <HStack>
                        <Text>Owner's pic</Text>
                        <Text size='sm'>Owner's name</Text>
                    </HStack>
                </Box>
            </HStack>
        </VStack>




        /* <VStack>
          <AspectRatio w="100%" ratio={164 / 210}>
            <VStack style={{ display: "flex", position: "relative" }}>
              <Image
                w="100%"
                h="100%"
                source={{
                  uri: imageSrc,
                }}
                alt={title}
              />
              {showWishListIcon ? (
                <Box
                  mt={2}
                  mr={2}
                  bg="muted.50"
                  position="absolute"
                  borderRadius="full"
                  right="0"
                >
                  <IconButton
                    variant="ghost"
                    icon={
                      <Icon
                        color="muted.900"
                        size="xl"
                        onPress={HandleWishlistPress}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        as={
                          <TouchableOpacity>
                            {isWishlisted ? (
                              <MaterialIcons
                                name="favorite"
                                size={30}
                                color="black"
                              />
                            ) : (
                              <MaterialIcons
                                name="favorite-border"
                                size={30}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>
                        }
                      />
                    }
                  />
                </Box>
              ) : (
                ""
              )}
            </VStack>
          </AspectRatio>
          <Box pt={1} pb={3}>
            <VStack>
              <Text fontWeight="semibold">{title}</Text>
              <Text>{author}</Text>
            </VStack>
          </Box>
        </VStack> 
      </Pressable>*/
    );
  };
  
  export default WishlistCard;
  