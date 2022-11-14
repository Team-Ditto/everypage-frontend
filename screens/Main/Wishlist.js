import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Box, HStack, Button, ScrollView } from 'native-base';
import { OrangeShades } from '../../assets/style/color';

import Search from '../Assets/Search';
import ForLater from '../Wishlist/ForLater';
import Requested from '../Wishlist/Requested';
import Filter from '../Assets/FilterSettings/Filter';
import { GetNotificationHeader } from '../../constants/GetNotificationHeader';
export default function Wishlist({ navigation }) {
  const [isForLater, setIsForLater] = useState(true);
  const [status, setStatus] = useState('For Later');
  const [isFilterVisible, setFilterVisible] = useState(false);

  function handleInput(value) {
    setIsForLater(value);
  }
  const onFilterClicked = () => {
    setFilterVisible(!isFilterVisible);
  };

  useEffect(() => {
    GetNotificationHeader(navigation);
  }, []);

  return (
    <VStack style={{ height: '100%' }}>
      <Box display='flex' width='100%' mt='18px' mb='10px'>
        <HStack pl={2} display='flex' justifyContent='center' alignItems='center'>
          <Search navigation={navigation} onFilterClicked={onFilterClicked} />
          <Filter />
        </HStack>
      </Box>
      <Box style={styles.tabsBox}>
        <HStack display='flex' flexDirection='row'>
          <Button
            style={isForLater ? styles.activeTab : styles.inactiveTab}
            _text={isForLater ? styles.activeTab : styles.inactiveTab}
            onPress={() => handleInput(true)}
          >
            For Later
          </Button>
          <Button
            style={isForLater ? styles.inactiveTab : styles.activeTab}
            _text={isForLater ? styles.inactiveTab : styles.activeTab}
            onPress={() => handleInput(false)}
          >
            Requested
          </Button>
        </HStack>
      </Box>
      <ScrollView>
        <Box>
          {isForLater ? (
            <ForLater navigation={navigation} handleInput={handleInput} />
          ) : (
            <Requested navigation={navigation} handleInput={handleInput} />
          )}
        </Box>
      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  tabsBox: {
    backgroundColor: OrangeShades.quaternaryOrange,
    marginHorizontal: '4%',
    marginTop: 18,
    borderRadius: '10px',
    borderColor: OrangeShades.primaryOrange,
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  activeTab: {
    backgroundColor: OrangeShades.primaryOrange,
    color: OrangeShades.quaternaryOrange,
    flexGrow: true,
    borderRadius: '9px',
  },
  inactiveTab: {
    backgroundColor: OrangeShades.quaternaryOrange,
    color: OrangeShades.primaryOrange,
    flexGrow: true,
    borderRadius: '9px',
  },
  buttonActive: {
    backgroundColor: '#DC924D',
    flexGrow: true,
    borderRadius: '10px',
  },
  buttonInactive: {
    backgroundColor: '#FDF5EA',
    color: '#DC924D',
    flexGrow: true,
    borderRadius: '10px',
  },
});
