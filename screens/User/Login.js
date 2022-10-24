import React from 'react';
import {
  Box,
  HStack,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Heading,
  StatusBar,
  Icon,
  ScrollView,
} from 'native-base';
import { StyleSheet, Text, TextInput, View } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const Login = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor='gray' barStyle='dark-content' />
      <ScrollView>
        <Box px={5} bg='gray.400'>
          <Heading mt='40' size='xl' fontWeight='extrabold'>
            Everypages
          </Heading>
        </Box>

        <Box py='3' px='5'>
          <View
            _dark={{
              color: 'warmGray.200',
            }}
            color='coolGray.600'
            fontSize='sm'
          >
            <Text>Welcome to the hood for book lovers!</Text>
            <Text>To organize and track your books and discover, borrow and lend books around you.</Text>
          </View>

          <VStack space={10} mt='10' backgroundColor=''>
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                placeholder='xxxxxx@gmail.com'
                keyboardType='email-address'
                returnKeyType='next'
                autoCompleteType='email'
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input placeholder='xxxxxxxxx' secureTextEntry type='password' returnKeyType='done' />
              <Link
                _text={{
                  fontSize: 'sm',
                  fontWeight: '500',
                }}
                alignSelf='flex-start'
                mt='5'
                color='gray'
              >
                Forgot it?
              </Link>
            </FormControl>
            <Button
              colorScheme='gray'
              onPress={() => {
                navigation.navigate('BottomTab');
              }}
            >
              Login
            </Button>

            <Button
              // mt='2'
              colorScheme='gray'
            >
              <Icon source='' alt=''></Icon>
              Continue with Google
            </Button>

            <HStack mt='6' justifyContent='center'>
              <Text
                fontSize='sm'
                color='coolGray.600'
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                I'm a new user.{' '}
              </Text>
              <Link
                _text={{
                  color: 'gray',
                  fontWeight: 'medium',
                }}
                onPress={() => {
                  navigation.navigate('Signup');
                }}
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Login;
