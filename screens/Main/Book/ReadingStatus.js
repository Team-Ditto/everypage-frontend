import { Radio, CheckIcon, Divider, FormControl, Stack, HStack, Input, Pressable, Switch } from 'native-base';
import { useState } from 'react';
import { BlueShades } from '../../../assets/style/color';

const ReadingStatus = ({ bookObj, setBookObj }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <FormControl.Label mt={4}>READING STATUS</FormControl.Label>
      <Stack backgroundColor={BlueShades.tertiaryBlue} padding={4} borderRadius={5} _focus={{ textStyle: 'bold' }}>
        <Radio.Group
          defaultValue='1'
          name='myRadioGroup'
          accessibilityLabel='Pick your favorite number'
          onChange={value => {
            setBookObj(prevState => ({ ...prevState, readingStatus: value }));
          }}
        >
          <Radio value='To Read' my={2} size='sm'>
            To Read
          </Radio>
          <Divider my={3} bg='lightgrey' />
          <Radio value='Reading' my={2} size='sm'>
            Reading
          </Radio>
          <Divider my={3} bg='lightgrey' />
          <Radio value='Finished' my={2} size='sm'>
            Finished
          </Radio>
        </Radio.Group>
      </Stack>

      {/* location */}
      <Stack backgroundColor={BlueShades.tertiaryBlue} mt={2} padding={4} borderRadius={5}>
        <FormControl>
          <HStack justifyContent='space-between'>
            <FormControl.Label>Location</FormControl.Label>
            <Input
              w='70%'
              placeholder='Living Room'
              borderWidth={0}
              textAlign='right'
              onChangeText={text => {
                setBookObj(prevState => ({ ...prevState, location: text }));
              }}
            />
          </HStack>
        </FormControl>
        <Divider my={2} bg='grey' />
        <FormControl>
          <HStack justifyContent='space-between'>
            <Stack>
              <FormControl.Label>Sharable</FormControl.Label>
              <FormControl.HelperText>Book is available for other users to request </FormControl.HelperText>
            </Stack>
            <Switch
              value={bookObj.shareable}
              onValueChange={value => {
                setBookObj(prevState => ({ ...prevState, shareable: value }));
              }}
            />
          </HStack>
        </FormControl>
      </Stack>
    </>
  );
};

export default ReadingStatus;
