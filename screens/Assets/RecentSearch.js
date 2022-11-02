import { Input, Text, Icon, IconButton, HStack, ScrollView, VStack, View, Box, FormControl } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useRef, useState } from 'react';

const RecentSearch = ({ navigation }) => {
  const [text, setText] = useState([]);

  // const updateText = ({ target }) => {
  //   setText(target.value);
  // };

  return (
    <Box display='flex' width='100%' mt={2}>
      <HStack display='flex' justifyContent='space-evenly' alignItems='center'>
        <Input
          ml={2}
          width='75%'
          variant='rounded'
          InputLeftElement={<Icon as={<Ionicons name='search' />} size={5} ml='2' />}
          placeholder='Search'
          value={text}
          onChangeText={newText => setText(newText)}
          // onChange={updateText}
        />

        <TouchableOpacity onPress={() => this.setState({ value })}>
          <Text onPress={() => setText('')}>clear</Text>
        </TouchableOpacity>
      </HStack>
      <VStack>
        {/* {text.map(input => {
          return <li>{input.text}</li>;
        })} */}
        <Text>{text}</Text>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 3,
  },
});

export default RecentSearch;
