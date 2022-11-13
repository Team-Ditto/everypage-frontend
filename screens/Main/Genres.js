import { genreData } from '../../constants/LibraryData';
import { VStack, HStack, Text, Pressable, Icon, Divider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

const Genres = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <VStack padding={2}>
          {genreData.map(g => {
            return (
              <Pressable
                key={g}
                onPress={() => {
                  navigation.navigate('SingleGenre', { genre: g });
                }}
              >
                <HStack justifyContent='space-between' padding={4}>
                  <Text fontSize='lg'>{g}</Text>
                  <Icon as={MaterialIcons} name='keyboard-arrow-right' size='lg' />
                </HStack>
                <Divider />
              </Pressable>

            );
          })}
        </VStack>
      </ScrollView>
    </>
  );
};

export default Genres;
