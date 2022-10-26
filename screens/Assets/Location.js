import React, { useEffect, useState } from 'react';
import { VStack, Button, FormControl, Input, Link, IconButton, Text, View } from 'native-base';
import * as Loc from 'expo-location';
import Map from './Map';
import Spinner from 'react-native-loading-spinner-overlay';
import { StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';
import { whiteShades } from '../../assets/style/color';

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
      <Link
        _text={{
          color: 'gray',
          textDecoration: 'none',
          display: 'flex',
          justifyContent: '',
          flexDirection: 'row-reverse',
          backgroundColor: 'red',
        }}
        onPress={() => {}}
      >
        Skip
      </Link>
      <VStack>
        <Text>Set Your Library Location.</Text>
        <Text>Set it now or updtae in your profile</Text>
      </VStack>
      <VStack>
        <FieldSet
          label='Fieldset label'
          labelPosition='left'
          labelColor='black'
          labelBackgroundColor='#fff'
          labelStyle={{
            height: 25,
            padding: 5,
          }}
        >
          <Text>Field Set Body</Text>
        </FieldSet>
      </VStack>
      <FormControl>
        <FormControl.Label>Your Zip Code</FormControl.Label>
        <Input placeholder='xxx xxx' keyboardType='default' returnKeyType='next' />
        <FormControl.ErrorMessage>Zip code is required</FormControl.ErrorMessage>
      </FormControl>
      <View style={{ display: 'flex', flexDirection: 'column', flex: '1', position: 'relative', height: '100%' }}>
        <Text>Use my current loaction</Text>
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
          <Button style={{ width: '80%' }} onPress={() => {}}>
            Next
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Location;
