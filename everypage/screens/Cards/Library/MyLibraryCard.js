import { Box, AspectRatio, Image, VStack, Text, Pressable } from "native-base";

const MyLibraryCard = ({ data, navigation }) => {
  const { title, author, imageSrc } = data;

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("SingleBook", {
          libCardData: data,
        });
      }}
      alignItems="center"
      w="47%"
      mx={1}
    >
      <VStack>
        <AspectRatio w="100%" ratio={164 / 210}>
          <Image
            source={{
              uri: imageSrc,
            }}
            alt={title}
          />
        </AspectRatio>
        <Box pt={1} pb={3}>
          <VStack>
            <Text fontWeight="semibold">{title}</Text>
            <Text>{author}</Text>
          </VStack>
        </Box>
      </VStack>
    </Pressable>
  );
};

export default MyLibraryCard;
