import { genreData } from '../../constants/LibraryData';
import { VStack, HStack, Text, Pressable, Icon, Divider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const Genres = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <VStack padding={2}>
          {genreData.map(genre => {
            return (
              <>
                <Pressable
                  onPress={() => {
                    navigation.navigate('SearchResults');
                  }}
                >
                  <HStack justifyContent='space-between' padding={4}>
                    <Text fontSize='lg'>{genre}</Text>
                    <Icon as={MaterialIcons} name='keyboard-arrow-right' size='lg' />
                  </HStack>
                  <Divider />
                </Pressable>
              </>
            );
          })}
        </VStack>
      </ScrollView>
    </>
  );
};

export default Genres;
