import { Box, AspectRatio, Image, VStack, Text } from "native-base";

const MyLibraryCard = ({ data, navigation }) => {
  const { title, author, imageSrc } = data;

  return (
    <>
      {/* <Box alignItems="center">
                <AspectRatio w="100%" ratio={164/210}>
                    <Image source={{uri: image}} alt="Book's cover image" />
                </AspectRatio>
                <Box px={2} pt={1} pb={3}>
            <VStack>
              <Text fontWeight="semibold">{title}</Text>
                        <Text>{author}</Text>
                    </VStack>
                </Box>
        </Box> */}

      <Box alignItems="center" w="164">
        <VStack>
          <AspectRatio w="100%" ratio={164 / 210}>
            <Image
              source={{
                uri: imageSrc
              }}
              alt={title}
            />
          </AspectRatio>
          <Box px={2} pt={1} pb={3}>
            <VStack>
              <Text fontWeight="semibold">{title}</Text>
              <Text>{author}</Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default MyLibraryCard;
