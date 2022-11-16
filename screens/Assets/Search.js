import { Input, Icon, Button, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { BlueShades } from '../../assets/style/color';
import BarScanner from '../../assets/searchbar-icons/bar-scanner.png';

const Search = ({ navigation, onSearchSubmitted }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Input
      ml={2}
      w='82.5%'
      h='42px'
      borderRadius='10px'
      borderColor={BlueShades.primaryBlue}
      value={searchText}
      onChangeText={text => setSearchText(text)}
      InputLeftElement={
        <Icon as={<Ionicons name='search' />} size={6} ml='2' style={{ color: BlueShades.primaryBlue }} />
      }
      InputRightElement={
        <Button
          variant='unstyled '
          onPress={() => {
            navigation.navigate('Scanner');
          }}
        >
          <Icon
            as={<Image source={BarScanner} alt='bar scanner' />}
            style={{
              color: BlueShades.primaryBlue,
            }}
            size={6}
            ml='2'
          >
          </Icon>
        </Button>
      }
      fontSize={16}
      color={BlueShades.primaryBlue}
      placeholder='Search'
      returnKeyType='done'
      onSubmitEditing={text => {
        onSearchSubmitted(text.nativeEvent.text);
      }}
    />
  );
};

export default Search;
