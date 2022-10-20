import React, { useState } from "react";
import { Text, Box, VStack, ScrollView } from "native-base"
import { LibraryData } from "../../constants/LibraryData";
import WishlistCard from "../Cards/Wishlist/WishlistCard";

export default function ForLater({ libData, navigation }) {
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
                {libData.map((data, id) => {
                    return (
                    <WishlistCard key={id} data={data} navigation={navigation} />
                    );
                })}
            </Box>
            </ScrollView>
        </VStack>
    )
};