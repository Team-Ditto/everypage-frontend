import { View } from 'react-native';
import Accordion from '../Accordion';
import { ReadStatus } from '../../../constants/LibraryData';

export default function ReadingStatus({ filterSetting, handleFilterSetting }) {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion
        title='Reading Status'
        content={ReadStatus}
        filterSetting={filterSetting}
        handleFilterSetting={handleFilterSetting}
      />
    </View>
  );
}
