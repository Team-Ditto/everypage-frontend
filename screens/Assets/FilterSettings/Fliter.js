import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Input, Box, Icon, IconButton, HStack, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { BlueShades, OrangeShades } from '../../../assets/style/color';
import Sort from './Sort';
import Genre from './Genre';
import ReadingStatus from './ReadingStatus';
import LocationSetting from './LocationSetting';
export default function Fliter() {
  const [modalVisible, setModalVisible] = useState(false);
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
            <Sort />
            <Genre />
            <ReadingStatus />
            <LocationSetting />
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
              <Pressable style={[styles.button, styles.buttonApply]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Apply</Text>
              </Pressable>
            </HStack>
          </View>
        </View>
      </Modal>
      <IconButton
        ml={2}
        mr={2}
        height='34px'
        variant='unstyled'
        px={2}
        bg={OrangeShades.primaryOrange}
        icon={<Icon size='md' as={<Ionicons name='filter-outline' size={24} color='black' />} color='white' />}
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
