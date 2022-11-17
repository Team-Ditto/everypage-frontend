import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, VStack, FormControl, Input, Link, Button, Text, View, Image } from 'native-base';
import { signUpWithEmailAndPassword } from '../../firebase/firebase-service';
import Everypage_Logo from '../../assets/Everypage_Logo.png';
import { BlueShades, OrangeShades } from '../../assets/style/color';
import * as ImagePicker from 'expo-image-picker';
import { stringify } from 'json5';

const Signup = ({ navigation }) => {
  // TODO:please do something with this error
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [singleFile, setSingleFile] = useState(null);
  const [errMsg, setErrMsg] = useState('');

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

  // const validate = () => {
  //   setErrors({ ...errors });
  // };

  const handleSubmit = async () => {
    try {
      if (email && password && displayName) {
        await signUpWithEmailAndPassword(email, password, displayName, singleFile);
      }
    } catch (err) {
      console.log(JSON.stringify(err));
      console.log(err.code)

      setErr(true);
      switch (err.code) {
        case 'auth/weak-password':
          setErrMsg('weak password');
          break;

        case 'auth/invalid-email':
          setErrMsg('invalid email');
          break;
      }
    }
  };

  return (
    //container start
    <Box px={3} flex={1}>
      <Image
        style={{ width: '100%', height: 200, resizeMode: 'contain' }}
        source={Everypage_Logo}
        alt={'Everypage Logo'}
      />{' '}
      <View>
        <Text fontSize='xl'>Create an account. It's Free</Text>
      </View>
      <VStack space={3} mt='5'>
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <Input
            isRequired
            // isInvalid={'name' in errors}
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
          {errMsg === 'invalid email' ? <Text color='red.900'>Invalid Email</Text> : ''}
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
          {errMsg === 'weak password' ? <Text color='red.900'>Invalid Password</Text> : ''}
        </FormControl>
        <Text>Atleast 6 characters</Text>
        
        {/* SV: removed as not needed in UI but code still here for reference */}
        {/* <Button onPress={pickImage} bg={BlueShades.primaryBlue}>
          Pick Image
        </Button> */}
        <Button mt='6' bg={BlueShades.primaryBlue} onPress={handleSubmit}>
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
              color: OrangeShades.primaryOrange,
              fontWeight: 'bold',
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
