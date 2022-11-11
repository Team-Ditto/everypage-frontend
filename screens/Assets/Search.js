import { Input, Icon, Button, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { BlueShades } from '../../assets/style/color';

const Search = ({ navigation, onSearchSubitted }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Input
      ml={2}
      width='85%'
      focusOutlineColor={BlueShades.primaryBlue}
      variant='rounded'
      value={searchText}
      onChangeText={text => setSearchText(text)}
      InputLeftElement={
        <Icon as={<Ionicons name='search' />} style={{ color: BlueShades.primaryBlue }} size={5} ml='2' />
      }
      backgroundColor='white'
      borderColor={BlueShades.primaryBlue}
      InputRightElement={
        <Button
          variant='unstyled'
          onPress={() => {
            navigation.navigate('Scanner');
          }}
        >
          <Image source={require('../../assets/Bar_Scanner.png')} alt='Bar Code Scanner Images' />
        </Button>
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
