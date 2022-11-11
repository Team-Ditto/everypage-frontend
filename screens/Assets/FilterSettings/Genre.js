import { View } from 'react-native';
import Accordion from '../Accordion';
import { genreData } from '../../../constants/LibraryData';
export default function Genre({ filterSetting, handleFilterSetting }) {
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion
        title='Genre'
        content={genreData}
        filterSetting={filterSetting}
        handleFilterSetting={handleFilterSetting}
      />
    </View>
  );
}
