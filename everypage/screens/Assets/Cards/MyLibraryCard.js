import { Box, AspectRatio, Image, VStack, Text } from "native-base";

const MyLibraryCard = ({ props, navigation }) => {
  // const title, author, image, id = props;

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
                uri:
                  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg"
              }}
              alt="Book's cover image"
            />
          </AspectRatio>
          <Box px={2} pt={1} pb={3}>
            <VStack>
              <Text fontWeight="semibold">
                Harry Potter and the Socerer's Stone
              </Text>
              <Text>J. K. Rowling</Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default MyLibraryCard;
