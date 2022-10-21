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
  Image,
} from 'native-base';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    //container start
    <Box safeAreaTop px={3} bg="red.100" flex={1}>
      <HStack px={1} py={3} justifyContent="center" mt="10">
        <Text>Signup</Text>
      </HStack>
      <View>
        <Text>Create an account. It's free!</Text>
      </View>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <Input
            isRequired
            placeholder="xxxxxx"
            keyboardType="text"
            returnKeyType="next"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input
            isRequired
            placeholder="xxxxxx@gmail.com"
            keyboardType="email-address"
            returnKeyType="next"
            autoCompleteType="email"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            isRequired
            placeholder="xxxxxxxxx"
            secureTextEntry
            type="password"
            returnKeyType="done"
          />
        </FormControl>
        <Text>Atleast 8 characters</Text>
        <Button mt="2" colorScheme="gray">
          Next
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
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
