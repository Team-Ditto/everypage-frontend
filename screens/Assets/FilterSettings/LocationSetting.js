import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Accordion from '../Accordion';
import { getMyBooksShelfLocation } from '../../../services/books-service';

export default function LocationSetting({ filterSetting, handleFilterSetting }) {
  const [shelfLocations, setShelfLocations] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const location = await getMyBooksShelfLocation();
      setShelfLocations(location.data);
    }
    fetchData();
  }, []);

  return (
    <View style={{ width: '100%', paddingTop: 20, paddingHorizontal: 10 }}>
      <Accordion
        title='Location'
        content={shelfLocations}
        filterSetting={filterSetting}
        handleFilterSetting={handleFilterSetting}
      />
    </View>
  );
}
