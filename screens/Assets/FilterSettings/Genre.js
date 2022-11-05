import { View, Text } from 'react-native';
import React from 'react';
import Accordion from '../Accordion';
import { genreData } from '../../../constants/LibraryData';
export default function Genre() {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion title='Genre' content={genreData} />
    </View>
  );
}
