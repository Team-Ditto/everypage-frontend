import { View, Text } from 'react-native';
import React from 'react';
import { Location } from '../../../constants/LibraryData';
import Accordion from '../Accordion';

export default function LocationSetting() {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion title='Location' content={Location} />
    </View>
  );
}
