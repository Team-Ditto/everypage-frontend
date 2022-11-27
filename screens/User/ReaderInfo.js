import { Text, StyleSheet } from 'react-native';
import { useEffect, useContext, useState } from 'react';
import { Button, VStack, ScrollView, Pressable } from 'native-base';
import { BlueShades, OrangeShades, WhiteShades, BlackShades } from '../../assets/style/color';
import { updateMyUserProfile } from '../../services/users-service';
import { AuthContext } from '../../contexts/AuthContext';

export default function ReaderInfo({ navigation }) {
  const [readerType, setReaderType] = useState('unset');
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: 'Tell us more',
    });
  }, []);

  const handleSaveReaderType = async () => {
    // for now I am just using static data. But remember to set firstTimeLogin as false here along with readerType
    const updatedUser = await updateMyUserProfile({ readerType: readerType, firstTimeLogin: false });
    setCurrentUser(updatedUser.data);
    // do not navigate from here, it should happen automatically
  };

  return (
    <>
      <ScrollView>
        <VStack mt={10} mb={5} mx={5}>
          <Text style={{ fontSize: '34' }}>You're almost there, {currentUser.displayName}!</Text>
          <Text style={{ marginTop: 20, fontSize: '24' }}>What type of reader are you?</Text>
        </VStack>
        <VStack mx={5} space={28}>
          <Pressable
            style={readerType === 'Fast' ? styles.readerTypeContainerSelected : styles.readerTypeContainer}
            onPress={() => setReaderType('Fast')}
          >
            <Text
              style={{
                fontSize: '20',
                color: readerType === 'Fast' ? WhiteShades.primaryWhite : BlackShades.primaryBlack,
              }}
            >
              Fast Reader
            </Text>
            <Text
              style={{
                fontSize: '14',
                color: readerType === 'Fast' ? WhiteShades.primaryWhite : BlackShades.primaryBlack,
              }}
            >
              Read one or more than one book in a day
            </Text>
          </Pressable>
          <Pressable
            style={readerType === 'Casual' ? styles.readerTypeContainerSelected : styles.readerTypeContainer}
            onPress={() => setReaderType('Casual')}
          >
            <Text
              style={{
                fontSize: '20',
                color: readerType === 'Casual' ? WhiteShades.primaryWhite : BlackShades.primaryBlack,
              }}
            >
              Casual Reader
            </Text>
            <Text
              style={{
                fontSize: '14',
                color: readerType === 'Casual' ? WhiteShades.primaryWhite : BlackShades.primaryBlack,
              }}
            >
              Read book as often as I like
            </Text>
          </Pressable>
          <Pressable
            style={readerType === 'Slow' ? styles.readerTypeContainerSelected : styles.readerTypeContainer}
            onPress={() => setReaderType('Slow')}
          >
            <Text
              style={{
                fontSize: '20',
                color: readerType === 'Slow' ? WhiteShades.primaryWhite : BlackShades.primaryBlack,
              }}
            >
              Slow Reader
            </Text>
            <Text
              style={{
                fontSize: '14',
                color: readerType === 'Slow' ? WhiteShades.primaryWhite : BlackShades.primaryBlack,
              }}
            >
              Read one book in more than 3 days
            </Text>
          </Pressable>
        </VStack>
        <Button
          width='90%'
          size='lg'
          mx='auto'
          my='70px'
          borderRadius={10}
          bg={readerType === 'unset' ? '#739EB8' : BlueShades.primaryBlue}
          disabled={readerType === 'unset' ? true : false}
          onPress={handleSaveReaderType}
        >
          Done
        </Button>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  readerTypeContainer: {
    backgroundColor: OrangeShades.quaternaryOrange,
    borderWidth: 1,
    borderColor: OrangeShades.primaryOrange,
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  readerTypeContainerSelected: {
    backgroundColor: OrangeShades.primaryOrange,
    borderWidth: 1,
    borderColor: OrangeShades.primaryOrange,
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
