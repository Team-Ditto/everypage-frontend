import React from "react";
import { VStack, Center, Divider } from "native-base";
import WishlistBookCard from "../Assets/WishlistBookCard";

const ForLater = () => {
  const dummy = [
    {
      bookName: "American Gods",
      owner: "Tom",
      writer: "Neil Gaiman",
      status: "Available",
    },
    {
      bookName: "The Hunger Games",
      owner: "Jim",
      writer: "Suzanne Collins",
      status: "Available",
    },
    {
      bookName: "Somehow I Manage",
      owner: "Ruby",
      writer: "Michel G. Scott",
      status: "Available",
    },
    {
      bookName: "The Handmaid's Tale",
      owner: "Julia",
      writer: "Margaret Atwood",
      status: "Available",
    },
  ];

  return (
    <VStack>
      <Center>
        <VStack space="4" divider={<Divider />}>
          <WishlistBookCard data={dummy} />
        </VStack>
      </Center>
    </VStack>
  );
};

export default ForLater;
