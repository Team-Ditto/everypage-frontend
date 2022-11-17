import { Text } from 'native-base';
import { useContext } from 'react';
import { View } from 'react-native';
import { Distance } from '../../../constants/LibraryData';
import { AuthContext } from '../../../contexts/AuthContext';
import Accordion from '../Accordion';

export default function DiscoverLocationSettings({ filterSetting, handleFilterSetting }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      {currentUser['location'] !== undefined ? (
        <Accordion
          title='Location (meters)'
          content={Distance}
          filterSetting={filterSetting}
          handleFilterSetting={handleFilterSetting}
        />
      ) : (
        <Text bold fontSize='md'>
          *** No Location ***
        </Text>
      )}
    </View>
  );
}
