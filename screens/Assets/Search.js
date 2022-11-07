import { Input, Box, Icon, IconButton, HStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import SearchResult from './SearchResult';
import { useState } from 'react';
import { BlueShades, OrangeShades } from '../../assets/style/color';

const Search = ({ navigation, onSearchSubitted }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Input
      ml={2}
      width='85%'
      variant='rounded'
      value={searchText}
      onChangeText={text => setSearchText(text)}
      InputLeftElement={<Icon as={<Ionicons name='search' />} size={5} ml='2' />}
      InputRightElement={
        <Icon
          as={<Ionicons name='barcode' />}
          size={8}
          style={{
            color: BlueShades.primaryBlue,
          }}
          ml='2'
          mr='2'
          onPress={() => {
            navigation.navigate('Scanner');
          }}
        />
      }
      placeholder='Search'
      returnKeyType='done'
      onSubmitEditing={text => {
        onSearchSubitted(text.nativeEvent.text);
      }}
    />
  );
};

export default Search;
