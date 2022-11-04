import { Input, Box, Icon, IconButton, HStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import SearchResult from './SearchResult';
import { useState } from 'react';
import { BlueShades, OrangeShades } from '../../assets/style/color';

const Search = ({ navigation, searchField }) => {
  const [searchText, setSearchText] = useState(searchField !== '' ? searchField : '');
  return (
    <Box display='flex' width='100%' mt={2}>
      <HStack display='flex' justifyContent='center' alignItems='center'>
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
          onSubmitEditing={() => {
            navigation.navigate('SearchResult', { searchText });
          }}
        />

        <IconButton
          ml={2}
          mr={2}
          height='34px'
          variant='unstyled'
          px={2}
          bg={OrangeShades.primaryOrange}
          icon={<Icon size='md' as={<Ionicons name='filter-outline' size={24} color='black' />} color='white' />}
        />
      </HStack>
    </Box>
  );
};

export default Search;
