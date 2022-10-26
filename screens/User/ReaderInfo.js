import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Button, VStack } from 'native-base';
import { BlueShades } from '../../assets/style/color';
export default function ReaderInfo({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Tell us more',
    });
  }, []);
  return (
    <>
      <VStack>
        <Text>You're almost there @username</Text>
        <Text>What type of reader are you?</Text>
      </VStack>
      <VStack></VStack>
      <VStack
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          marginTop: 20,
        }}
      >
        <Button
          width='80%'
          bg={BlueShades.primaryBlue}
          onPress={() => {
            navigation.navigate('BottomTab');
          }}
        >
          Done
        </Button>
      </VStack>
    </>
  );
}
