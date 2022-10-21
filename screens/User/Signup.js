import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Box, HStack, VStack, FormControl, Input, Link, Button } from 'native-base';
import * as ImagePicker from 'expo-image-picker';

import { signUpWithEmailAndPassword } from '../../firebase/firebase-service';

const Signup = ({ navigation }) => {
  // TODO:please do something with this error
  const [err, setErr] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [singleFile, setSingleFile] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSingleFile(result);
    }
  };

  const handleSubmit = async () => {
    try {
      if (email && password && displayName) {
        await signUpWithEmailAndPassword(email, password, displayName, singleFile);

        navigation.navigate('BottomTab');
      }
    } catch (err) {
      console.log(JSON.stringify(err));
      setErr(true);
    }
  };

  return (
    //container start
    <Box safeAreaTop px={3} bg='red.100' flex={1}>
      <HStack px={1} py={3} justifyContent='center' mt='10'>
        <Text>Signup</Text>
      </HStack>
      <View>
        <Text>Create an account. It's free!</Text>
      </View>
      <VStack space={3} mt='5'>
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <Input
            isRequired
            placeholder='xxxxxx'
            keyboardType='text'
            returnKeyType='next'
            value={displayName}
            onChangeText={value => setDisplayName(value)}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input
            isRequired
            placeholder='xxxxxx@gmail.com'
            keyboardType='email-address'
            returnKeyType='next'
            autoCompleteType='email'
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            isRequired
            placeholder='xxxxxxxxx'
            secureTextEntry
            type='password'
            returnKeyType='done'
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </FormControl>
        <Text>Atleast 8 characters</Text>

        <Button onPress={pickImage}>Pick Image</Button>

        <Button mt='2' colorScheme='gray' onPress={handleSubmit}>
          Next
        </Button>
        <HStack mt='6' justifyContent='center'>
          <Text
            fontSize='sm'
            color='coolGray.600'
            _dark={{
              color: 'warmGray.200',
            }}
          >
            Already have an account?.{' '}
          </Text>
          <Link
            _text={{
              color: 'gray',
              fontWeight: 'medium',
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            Login
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Signup;
