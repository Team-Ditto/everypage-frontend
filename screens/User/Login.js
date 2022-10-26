import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  StatusBar,
  Icon,
  ScrollView,
  Image,
  View,
  Divider,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Everypage_Logo from '../../assets/Everypage_Logo.png';
import { BlackShades, BlueShades, whiteShades, OrangeShades } from '../../assets/style/color';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const Login = ({ navigation }) => {
  return (
    <ScrollView>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <VStack>
        <Image
          style={{ width: '100%', height: 200, resizeMode: 'contain' }}
          source={Everypage_Logo}
          alt={'Everypage Logo'}
        />
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

          <VStack space={5} mt='5'>
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
            </FormControl>
            <Button bg={BlueShades.primaryBlue}>Login</Button>
            <VStack>
              <Divider />
            </VStack>
            <Button
              leftIcon={<AntDesign name='google' size={24} color='black' />}
              bg={whiteShades.primaryWhite}
              variant='unstyled'
              _text={{
                color: BlackShades.primaryBlack,
              }}
            >
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
                Don't have an account{' '}
              </Text>
              <Link
                _text={{
                  color: OrangeShades.primaryOrange,
                  fontWeight: 'medium',
                }}
                onPress={() => {
                  navigation.navigate('Signup');
                }}
              >
                Sign Up Now
              </Link>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Login;
