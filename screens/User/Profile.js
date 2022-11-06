import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { logout } from '../../firebase/firebase-service';
import {
  Button,
  ScrollView,
  View,
  Text,
  Image,
  Box,
  VStack,
  St,
  HStack,
  Link,
  Icon,
  ChevronRightIcon,
  FavouriteIcon,
} from 'native-base';
import { LibraryData } from '../../constants/LibraryData';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { FontAwesome } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  const [libData, setLibData] = useState(LibraryData);

  const handleLogout = async () => {
    await logout();
  };
  return (
    <ScrollView>
      {/* <Button mt='2' colorScheme='gray' onPress={handleLogout}>
        Logout
      </Button> */}
      <Box style={styles.userData}>
        <Image source={require('../../assets/person.jpg')} style={styles.personImage} />
        <VStack>
          <Text fontWeight='semibold'>Mitatatatatta</Text>
          {/* Fetch user name */}
          <Text>Casual Reader</Text>
          {/* Fetech reader type data */}
          <Text fontStyle='italic' fontSize='sm'>
            joined 24 Oct 2022
          </Text>
        </VStack>
        <Image source={require('../../assets/pen.png')} style={styles.penIcon} />
      </Box>
      <VStack mx={30} my={5}>
        <Text py={1} fontSize='md' fontWeight='semibold'>
          History
        </Text>
        <Text py={1}>Books Borrowed (12)</Text>
        {/* All the total number of books borrowed */}
        <Text>Books Returned (12)</Text>
      </VStack>
      <HStack justifyContent='space-between' mx={30}>
        <Text fontWeight='bold'>Shared Books(25)</Text>
        <Link>
          view all <ChevronRightIcon name='arrow-right' size={5} />
        </Link>
      </HStack>
      <VStack mx={5}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Box py={3} w='15%' flexDirection='row' justifyContent='space-between' borderRadius={4}>
            {/* <FontAwesome name='favorite' size={24} color='black' /> */}
            {libData.map((data, id) => {
              return <MyLibraryCard key={id} data={data} navigation={navigation} />;
            })}
          </Box>
        </ScrollView>
      </VStack>
      {/* ================================== */}
      <HStack justifyContent='space-between' mx={30}>
        <Text fontWeight='bold'>Joined Communities</Text>
        <Link>
          view all <ChevronRightIcon name='arrow-right' size={5} />
        </Link>
      </HStack>
      <VStack mx={5}>
        {/* Inseted of books fetch communities gourps */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Box py={3} w='15%' flexDirection='row' justifyContent='space-between' borderRadius={4}>
            {/* <FontAwesome name='favorite' size={24} color='black' /> */}
            {libData.map((data, id) => {
              return <MyLibraryCard key={id} data={data} navigation={navigation} />;
            })}
          </Box>
        </ScrollView>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  penIcon: {
    width: 16,
    height: 16,
  },
  personImage: {
    width: '20%',
    height: '100%',
    borderRadius: 30,
    marginRight: -80,
  },
  userData: {
    backgroundColor: '#EBF3F8',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
    padding: 20,
  },
  userHistory: {},
});
