import { View } from 'native-base';
import Accordion from '../Accordion';
import { sort } from '../../../constants/FilterContent';

export default function Sort({ filterSetting, handleFilterSetting }) {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion title='Sort' content={sort} filterSetting={filterSetting} handleFilterSetting={handleFilterSetting} />
    </View>
  );
}
