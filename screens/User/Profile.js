import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { logout } from '../../firebase/firebase-service';
import moment from 'moment';
import { Button, ScrollView, Text, Image, Box, VStack, HStack, Link, ChevronRightIcon } from 'native-base';
import { LibraryData } from '../../constants/LibraryData';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { getMyUserProfile } from '../../services/users-service';
import { GetNotificationHeader } from '../../constants/GetNoticationHeader';
import { BlueShades } from '../../assets/style/color';

export default function Profile({ navigation }) {
  const [libData, setLibData] = useState(LibraryData);
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchData() {
      let fetchedUser = await getMyUserProfile();
      console.log(fetchedUser.data.photoURL);
      setUser(fetchedUser.data);
    }
    fetchData();
    GetNotificationHeader(navigation);
  }, []);

  const handleLogout = async () => {
    await logout();
  };
  return (
    <ScrollView>
      <Button mt='2' colorScheme={BlueShades.primaryBlue} onPress={handleLogout}>
        Logout
      </Button>
      <Box style={styles.userData}>
        <Image source={{ uri: user.photoURL }} alt={user.displayName} style={styles.personImage} />
        <VStack>
          <Text fontWeight='semibold'>{user.displayName}</Text>
          {/* Fetch user name */}
          <Text>Casual Reader</Text>
          {/* Fetech reader type data */}
          <Text fontStyle='italic' fontSize='sm'>
            joined {moment(user.createdAt).format('DD MMMM YYYY')}
          </Text>
        </VStack>
        <Image source={require('../../assets/pen.png')} alt='Edit Icon Image' style={styles.penIcon} />
      </Box>
      <VStack mx={30} my={5}>
        <Text py={1} fontSize='md' fontWeight='semibold'>
          History
        </Text>
        <Text py={1}>Books Borrowed 12</Text>
        {/* All the total number of books borrowed */}
        <Text>Books Returned 12</Text>
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
