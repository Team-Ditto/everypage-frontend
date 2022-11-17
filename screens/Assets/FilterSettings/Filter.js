import { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { Icon, IconButton, HStack } from 'native-base';
import { BlueShades } from '../../../assets/style/color';
import Sort from './Sort';
import Genre from './Genre';
import ReadingStatus from './ReadingStatus';
import LocationSetting from './LocationSetting';
import FilterIcon from '../../../assets/searchbar-icons/filter.png';
import DiscoverLocationSettings from './DiscoverLocationSettings';
export default function Filter({ filterSetting, setFilterSetting, ApplyFilterSettings, isFromDiscover = false }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleFilterSetting = (filterType, filterValue) => {
    setFilterSetting({ ...filterSetting, [filterType]: filterValue });
  };
  const HandleOnPressApplyFilterSettings = () => {
    ApplyFilterSettings();
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Sort filterSetting={filterSetting} handleFilterSetting={handleFilterSetting} />
            <Genre filterSetting={filterSetting} handleFilterSetting={handleFilterSetting} />
            <ReadingStatus filterSetting={filterSetting} handleFilterSetting={handleFilterSetting} />
            {isFromDiscover == true ? (
              <DiscoverLocationSettings filterSetting={filterSetting} handleFilterSetting={handleFilterSetting} />
            ) : (
              <LocationSetting filterSetting={filterSetting} handleFilterSetting={handleFilterSetting} />
            )}
            <HStack space={3} style={{ position: 'absolute', bottom: 20 }}>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: BlueShades.primaryBlue,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  Close
                </Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonApply]} onPress={HandleOnPressApplyFilterSettings}>
                <Text style={styles.textStyle}>Apply</Text>
              </Pressable>
            </HStack>
          </View>
        </View>
      </Modal>
      <IconButton
        ml={2}
        mr={2}
        variant='unstyled'
        px={2}
        icon={<Icon as={<Image source={FilterIcon} w='26px' h='26px' alt='filter icon' />} size={7} />}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalView: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 55,
    alignItems: 'center',
    shadowColor: '#000',
    position: 'relative',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 90,
  },
  buttonApply: {
    backgroundColor: BlueShades.primaryBlue,
    color: '#fff',
  },
  buttonClose: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: BlueShades.primaryBlue,
    color: BlueShades.primaryBlue,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
