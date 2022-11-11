import { Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { Button, VStack } from 'native-base';
import { BlueShades, OrangeShades } from '../../assets/style/color';
export default function ReaderInfo({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Tell us more',
    });
  }, []);
  return (
    <>
      <VStack mt={10} mb={5} mx={5}>
        <Text style={{ fontSize: '34' }}>You're almost there @username</Text>
        <Text style={{ marginTop: 20, fontSize: '24' }}>What type of reader are you?</Text>
      </VStack>
      <VStack mx={5} space={30}>
        <VStack style={styles.readerTypeContainer} space={1}>
          <Text style={{ fontSize: '24' }}>Fast Reader</Text>
          <Text style={{ fontSize: '16' }}>Read one or more than one book in a day</Text>
        </VStack>
        <VStack style={styles.readerTypeContainer}>
          <Text style={{ fontSize: '24' }}>Casual Reader</Text>
          <Text style={{ fontSize: '16' }}>Read book as often as I like</Text>
        </VStack>
        <VStack
          style={styles.readerTypeContainer}
          onPress={() => {
            alert('asd');
          }}
        >
          <Text style={{ fontSize: '24' }}>Slow Reader</Text>
          <Text style={{ fontSize: '16' }}>Read one book in more than 3 days</Text>
        </VStack>
      </VStack>
      <VStack
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          marginTop: 20,
        }}
      >
        <Button
          width='90%'
          size='lg'
          mt={10}
          borderRadius={10}
          bg={BlueShades.primaryBlue}
          onPress={() => {
            navigation.navigate('BottomTab');
          }}
        >
          Done
        </Button>
      </VStack>
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
});
