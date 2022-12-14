import { useEffect, useState } from 'react';
import { VStack, Button, Input, Text, View } from 'native-base';
import * as Loc from 'expo-location';

import Map from './Map';
import Spinner from 'react-native-loading-spinner-overlay';
import { BlueShades, WhiteShades } from '../../assets/style/color';
import { FontAwesome } from '@expo/vector-icons';
import { fieldSet, legend } from '../../assets/style/fieldsetStyle';
import { updateMyUserProfile } from '../../services/users-service';

export default function Location({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSpinnerVisible, setSpinnerVisible] = useState(true);
  const [zipCode, setZipCode] = useState('');

  const handleZipCodeChange = text => {
    setZipCode(text);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.navigate('ReaderInfo');
          }}
          variant='unstyled'
          _text={{
            color: WhiteShades.primaryWhite,
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

  const handleSaveLocation = async () => {
    let res = await updateMyUserProfile({
      location: {
        type: 'Point',
        coordinates: [location.longitude, location.latitude],
      },
    });
    // console.log('res', res);
    navigation.navigate('ReaderInfo');
  };

  return (
    <View bg={BlueShades.primaryBlue} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <View
        bg={WhiteShades.primaryWhite}
        style={{ display: 'flex', flexDirection: 'column', flex: 1, borderRadius: '20px' }}
      >
        <VStack mt='50px' mb='40px' mx='24px' style={{ display: 'flex', flexDirection: 'column' }}>
          <Text fontSize={24}>Set your library Location.</Text>
          <Text>Set it now or updtae in your profile</Text>
        </VStack>
        <View style={fieldSet} mx='24px' my={0}>
          <Text style={legend}>Your zip code</Text>
          <Input
            variant='unstyled'
            placeholder='XXX-XXX'
            value={zipCode}
            returnKeyType='done'
            onChangeText={handleZipCodeChange}
            onSubmitEditing={() => {
              let lat = '';
              let long = '';
              let address = zipCode;

              Loc.geocodeAsync(address)
                .then(res => {
                  // console.log(res);
                  lat = res[0]['latitude'];
                  long = res[0]['longitude'];
                  setLocation({ latitude: lat, longitude: long });
                })
                .catch(err => {
                  console.log(err);
                  alert("Couldn't find the location");
                });
            }}
          ></Input>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 32,
            marginTop: 12,
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
              bottom: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button bg={BlueShades.primaryBlue} style={{ width: '80%', borderRadius: 10 }} onPress={handleSaveLocation}>
              Next
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
