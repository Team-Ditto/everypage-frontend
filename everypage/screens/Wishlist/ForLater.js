import React from "react";
import { VStack, Center, Divider, FlatList } from "native-base";
import WishlistBookCard from "../Assets/WishlistBookCard";

const ForLater = () => {
  const dummy = [
    {
      bookName: "American Gods",
      owner: "Tom",
      author: "Neil Gaiman",
      status: "Available",
      bookCover: "https://picsum.photos/200/300.jpg",
    },
    {
      bookName: "The Hunger Games",
      owner: "Jim",
      author: "Suzanne Collins",
      status: "Available",
      bookCover: "https://picsum.photos/200/300.jpg",
    },
    {
      bookName: "Somehow I Manage",
      owner: "Ruby",
      author: "Michel G. Scott",
      status: "Available",
      bookCover: "https://picsum.photos/200/300.jpg",
    },
    {
      bookName: "The Handmaid's Tale",
      owner: "Julia",
      author: "Margaret Atwood",
      status: "Available",
      bookCover: "https://picsum.photos/200/300.jpg",
    },
  ];

  return (
    <FlatList
      width="100%"
      data={dummy}
      renderItem={({ item }) => (
        <WishlistBookCard
          bookName={item.bookName}
          owner={item.owner}
          author={item.author}
          status={item.status}
        />
      )}
    />
  );
};

export default ForLater;
