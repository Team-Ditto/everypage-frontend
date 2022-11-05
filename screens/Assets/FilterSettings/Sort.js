import { Text, View } from 'native-base';
import React from 'react';
import Accordion from '../Accordion';
import { sort } from '../../../constants/FilterContent';

export default function Sort() {
  return (
    <View style={{ width: '100%', margin: 10, padding: 10 }}>
      <Accordion title='Sort' content={sort} />
    </View>
  );
}
