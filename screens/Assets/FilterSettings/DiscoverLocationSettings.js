import { View, Text } from 'react-native';
import React from 'react';
import { Distance } from '../../../constants/LibraryData';
import Accordion from '../Accordion';

export default function DiscoverLocationSettings() {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion title='Location' content={Distance} />
    </View>
  );
}
