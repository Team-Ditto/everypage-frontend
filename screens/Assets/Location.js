import React, { useEffect, useState } from 'react';
import { VStack, Button, FormControl, Input, Link, IconButton, Text, View, HStack } from 'native-base';
import * as Loc from 'expo-location';
import Map from './Map';
import Spinner from 'react-native-loading-spinner-overlay';
import { StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';
import { BlueShades, whiteShades } from '../../assets/style/color';
import { FontAwesome } from '@expo/vector-icons';
import { fieldSet, legend } from '../../assets/style/fieldsetStyle';

const Location = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.navigate('ReaderInfo');
          }}
          variant='unstyled'
          _text={{
            color: whiteShades.primaryWhite,
          }}
        >
          Skip
        </Button>
      ),
    });
    (async () => {
      let { status } = await Loc.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Loc.getCurrentPositionAsync({});
      setSpinnerVisible(false);
      setLocation(location['coords']);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location;
  }
  return (
    <View bg={whiteShades.primaryWhite} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <VStack my={10} mx={5} style={{ display: 'flex', flexDirection: 'column' }}>
        <Text fontSize={24}>Set your library Location.</Text>
        <Text>Set it now or updtae in your profile</Text>
      </VStack>
      <View style={fieldSet}>
        <Text style={legend}>Your zip code</Text>
        <Input variant='unstyled' placeholder='xxx-xxx'></Input>
      </View>
      {/* <FormControl>
        <FormControl.Label>Your Zip Code</FormControl.Label>
        <Input placeholder='xxx xxx' keyboardType='default' returnKeyType='next' />
        <FormControl.ErrorMessage>Zip code is required</FormControl.ErrorMessage>
      </FormControl> */}
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
          marginTop: 5,
        }}
      >
        <FontAwesome name='location-arrow' size={24} color='black' />
        <Text> Use my current location</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', flex: '1', position: 'relative', height: '100%' }}>
        {location ? (
          <Map longitude={location.longitude} latitude={location.latitude} />
        ) : (
          <Spinner visible={isSpinnerVisible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
        )}
        <View
          style={{
            position: 'absolute',
            width: '100%',
            dsplay: 'flex',
            bottom: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            bg={BlueShades.primaryBlue}
            style={{ width: '80%', borderRadius: 10 }}
            onPress={() => {
              navigation.navigate('ReaderInfo');
            }}
          >
            Next
          </Button>
        </View>
      </View>
    </View>
  );
};
export default Location;