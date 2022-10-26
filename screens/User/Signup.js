import { Box, HStack, VStack, FormControl, Input, Link, Button, Text, View } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Everypage_Logo from '../../assets/Everypage_Logo.png';
import { BlueShades, OrangeShades } from '../../assets/style/color';

const Signup = ({ navigation }) => {
  return (
    //container start
    <Box px={3} flex={1}>
      <Image
        style={{ width: '100%', height: 200, resizeMode: 'contain' }}
        source={Everypage_Logo}
        alt={'Everypage Logo'}
      />
      <View>
        <Text fontSize='xl'>Create an account. It's Free</Text>
      </View>
      <VStack space={3} mt='5'>
        <FormControl>
          <FormControl.Label>Name *</FormControl.Label>
          <Input isRequired placeholder='xxxxxx' keyboardType='text' returnKeyType='next' />
        </FormControl>
        <FormControl>
          <FormControl.Label>Email ID *</FormControl.Label>
          <Input
            isRequired
            placeholder='xxxxxx@gmail.com'
            keyboardType='email-address'
            returnKeyType='next'
            autoCompleteType='email'
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password *</FormControl.Label>
          <Input isRequired placeholder='xxxxxxxxx' secureTextEntry type='password' returnKeyType='done' />
        </FormControl>
        <Text>Atleast 8 characters</Text>
        <Button
          mt='6'
          bg={BlueShades.primaryBlue}
          onPress={() => {
            navigation.navigate('Location');
          }}
        >
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
