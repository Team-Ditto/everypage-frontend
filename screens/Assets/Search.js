import { Input, Box, Icon, IconButton, HStack, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import SearchResult from './SearchResult';
import { useState } from 'react';
import { BlueShades, OrangeShades } from '../../assets/style/color';
import BarScanner from '../../assets/searchbar-icons/bar-scanner.png';

const Search = ({ navigation, searchField, onFilterClicked }) => {
  const [searchText, setSearchText] = useState(searchField !== '' ? searchField : '');
  return (
    <Input
      ml={2}
      w='85%'
      h='42px'
      borderRadius='10px'
      borderColor={BlueShades.primaryBlue}
      value={searchText}
      onChangeText={text => setSearchText(text)}
      InputLeftElement={
        <Icon as={<Ionicons name='search' />} size={6} ml='2' style={{ color: BlueShades.primaryBlue }} />
      }
      InputRightElement={
        <Icon
          as={<Image source={BarScanner} alt='bar scanner' />}
          style={{
            color: BlueShades.primaryBlue,
          }}
          size={6}
          ml='2'
          mr='3'
          onPress={() => {
            navigation.navigate('Scanner');
          }}
        />
      }
      fontSize={16}
      color={BlueShades.primaryBlue}
      placeholder='Search'
      returnKeyType='done'
      onSubmitEditing={() => {
        navigation.navigate('SearchResult', { searchText });
      }}
    />
  );
};

export default Search;
