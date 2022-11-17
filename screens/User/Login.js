import { useState } from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  ScrollView,
  Image,
  Divider,
  View,
  KeyboardAvoidingView,
} from 'native-base';
import { Dimensions } from 'react-native';
import { loginWithEmailAndPassword } from '../../firebase/firebase-service';
import { AntDesign } from '@expo/vector-icons';
import Everypage_Logo from '../../assets/Everypage_Logo.png';
import { BlackShades, BlueShades, OrangeShades, WhiteShades } from '../../assets/style/color';

const Login = ({ navigation }) => {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    await loginWithEmailAndPassword(email, password);
  };
  return (
    <KeyboardAvoidingView
      h={{
        base: Dimensions.get('window').height - 40,
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
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
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  placeholder='xxxxxxxxx'
                  secureTextEntry
                  type='password'
                  returnKeyType='done'
                  value={password}
                  onChangeText={value => setPassword(value)}
                />
              </FormControl>

              <Button bg={BlueShades.primaryBlue} onPress={handleLogin}>
                Login
              </Button>
              <VStack>
                <Divider />
              </VStack>
              <Button
                leftIcon={<AntDesign name='google' size={24} color='black' />}
                bg={WhiteShades.primaryWhite}
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
                  pb={40}
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
    </KeyboardAvoidingView>
  );
};

export default Login;
