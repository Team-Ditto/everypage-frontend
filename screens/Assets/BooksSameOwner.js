import { useEffect, useState } from 'react';
import { getBooksByUserId } from '../../services/books-service';
import { ScrollView, View, Text, HStack, Button, Link, ChevronRightIcon } from 'native-base';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { LibraryData } from '../../constants/LibraryData';

const BooksSameOwner = ({ userId, ownerName, bookId, navigation }) => {
  const [bookData, setBooksData] = useState(LibraryData);

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
      <HStack justifyContent='space-between' alignItems='center' my={3}>
        <Text fontSize='16px' fontWeight='bold'>
          Other books from {ownerName}
        </Text>
        <Link _text={{ fontSize: '16px' }} alignItems='center'>
          view all <ChevronRightIcon />
        </Link>
      </HStack>
      <ScrollView horizontal w='100%'>
        <View h='160px' w='250px' flexDirection='row'>
          {bookData.map((data, id) => {
            if (data._id != bookId) {
              return (
                <MyLibraryCard
                  key={id}
                  data={data}
                  navigation={navigation}
                  showWishListIcon={true}
                  displayBadge={false}
                />
              );
            }
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default BooksSameOwner;
