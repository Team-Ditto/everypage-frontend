import React, { useState } from "react";
import { Text, Box, VStack, ScrollView } from "native-base"
import { LibraryData } from "../../constants/LibraryData";
import WishlistCard from "../Cards/Wishlist/WishlistCard";

export default function ForLater({ libData, navigation }) {
    const [similarBookData, setSimilarBookData] = useState(LibraryData);
  
    return (

        <VStack>
            <Text fontSize="lg" fontWeight="800" ml="4%" mt="23px" mb="16px">
            For Later ({libData.length})
            </Text>
        <ScrollView>
            <Box
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