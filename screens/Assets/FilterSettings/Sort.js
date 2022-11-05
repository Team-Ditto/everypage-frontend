import { Text, View } from 'native-base';
import React from 'react';
import Accordion from '../Accordion';
import { sort } from '../../../constants/FilterContent';

export default function Sort() {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion title='Sort' content={sort} />
    </View>
  );
}
