import React, { useState } from "react";
import { Text, Box, VStack, ScrollView } from "native-base"
import { LibraryData } from "../../constants/LibraryData";
import MyLibraryCard from "../Cards/Library/MyLibraryCard";

export default function ForLater({ navigation }) {
    const [similarBookData, setSimilarBookData] = useState(LibraryData);
  
    return (

        <VStack>
            <Text>
            For Later page
            </Text>
        <ScrollView>
        <Box
          py={3}
          px={2}
          w="100%"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
            {similarBookData.map((data, id) => {
            return (
              <MyLibraryCard
                key={id}
                data={data}
                navigation={navigation}
                showWishListIcon={true}
              />
            )})}
            </Box>
            </ScrollView>
        </VStack>
    )
};