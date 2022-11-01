import { Input, Box, Icon, IconButton, HStack, View, Text, VStack } from 'native-base';
import { ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import RecentSearch from './RecentSearch';
import { data } from '../../constants/LibraryData';

function SearchResult() {
  return (
    <Box display='flex' width='100%' mt={2}>
      <View>
        <Text>Search Result</Text>
      </View>
      <HStack display='flex' justifyContent='center' alignItems='center'>
        <Input
          ml={2}
          width='85%'
          variant='rounded'
          InputLeftElement={<Icon as={<Ionicons name='search' />} size={5} ml='2' />}
          InputRightElement={
            <Icon
              as={<Ionicons name='barcode' />}
              size={8}
              ml='2'
              mr='2'
              onPress={() => {
                navigation.navigate('Scanner');
              }}
            />
          }
          placeholder='Search'
          
        />

        <IconButton
          ml={2}
          mr={2}
          height='34px'
          variant='solid'
          icon={<Icon size='md' as={<Ionicons name='filter-outline' size={24} color='black' />} color='white' />}
        />
      </HStack>
      <Text mx={2} my={2}>
        All ()
      </Text>
      <ScrollView>
        <Box
          py={3}
          px={2}
          w="100%"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {/* Diaplay the book data */}
        </Box>
      </ScrollView>
    </Box>
  );
}

export default SearchResult;
