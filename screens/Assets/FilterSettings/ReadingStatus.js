import { View, Text } from 'react-native';
import React from 'react';
import Accordion from '../Accordion';
import { ReadStatus } from '../../../constants/LibraryData';

export default function ReadingStatus() {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion title='Reading Status' content={ReadStatus} />
    </View>
  );
}
