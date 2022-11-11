import { View } from 'react-native';
import { Distance } from '../../../constants/LibraryData';
import Accordion from '../Accordion';

export default function DiscoverLocationSettings({ filterSetting, handleFilterSetting }) {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion
        title='Location'
        content={Distance}
        filterSetting={filterSetting}
        handleFilterSetting={handleFilterSetting}
      />
    </View>
  );
}
