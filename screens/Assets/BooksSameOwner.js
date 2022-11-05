import { useEffect, useState } from 'react';
import { getBooksByUserId } from '../../services/books-service';
import { ScrollView, View, Text, HStack, Button, ChevronRightIcon } from 'native-base';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { LibraryData } from '../../constants/LibraryData';

const BooksSameOwner = (props, navigation) => {
  const [bookData, setBooksData] = useState(LibraryData);

  const { userId, ownerName, bookId } = props;

  useEffect(() => {
    async function fetchData() {
      getBooksByUserId(userId).then(books => {
        setBooksData(books.data);
        // setSpinnerVisible(false);
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <HStack justifyContent='space-between' alignItems='center'>
        <Text>More books from {ownerName}</Text>
        <Button rightIcon={<ChevronRightIcon />}>view all</Button>
      </HStack>
      <ScrollView horizontal w='100%'>
        <View h='160px' w='250px' flexDirection='row'>
          {bookData.map((data, id) => {
            if (data._id != bookId) {
              return <MyLibraryCard key={id} data={data} navigation={navigation} showWishListIcon={true} />;
            }
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default BooksSameOwner;
