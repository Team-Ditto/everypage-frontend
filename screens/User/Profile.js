import { useState, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { logout } from '../../firebase/firebase-service';
import { LibraryData } from '../../constants/LibraryData';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import { AuthContext } from '../../contexts/AuthContext';
import { GetNotificationHeader } from '../../constants/GetNotificationHeader';
import { BlueShades } from '../../assets/style/color';
import {
  Button,
  ScrollView,
  View,
  Text,
  Image,
  Box,
  VStack,
  HStack,
  Link,
  Icon,
  ChevronRightIcon,
  FavouriteIcon,
} from 'native-base';
import { NotificationContext } from '../../contexts/NotificationContext';

export default function Profile({ navigation }) {
  const [libData, setLibData] = useState(LibraryData);
  const { currentUser } = useContext(AuthContext);
  const { totalUnreadNotifications } = useContext(NotificationContext);

  useEffect(() => {
    GetNotificationHeader(navigation, totalUnreadNotifications);
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ScrollView>
      <Box style={styles.userData}>
        <Image source={{ uri: currentUser.photoURL }} alt={currentUser.displayName} style={styles.personImage} />
        <VStack>
          <Text fontWeight='semibold'>{currentUser.displayName}</Text>
          <Text>{currentUser.readerType}</Text>
          <Text fontStyle='italic' fontSize='sm'>
            joined {new Date(currentUser.createdAt).toISOString().substring(0, 10).replaceAll('-', '/')}
          </Text>
        </VStack>
        <Image source={require('../../assets/pen.png')} alt='edit-icon' style={styles.penIcon} />
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
              return <MyLibraryCard key={id} data={data} navigation={navigation} showWishListIcon={true} />;
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
      <Button mt='2' colorScheme='gray' onPress={handleLogout}>
        Logout
      </Button>
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
});
