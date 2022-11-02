import { FormControl, Stack, Input, HStack, Button, Divider, Select, CheckIcon, Box, Image } from 'native-base';
import { useState } from 'react';
import { BlueShades } from '../../../assets/style/color';

const BookDetail = ({ bookObj, setBookObj }) => {
  const [bookCondition, setBookCondition] = useState('');
  return (
    <>
      <FormControl.Label>DETAILS</FormControl.Label>
      <Stack padding={4} w='100%' backgroundColor={BlueShades.tertiaryBlue} borderRadius={5}>
        <FormControl>
          <HStack justifyContent='space-between' alignItems='center'>
            <Stack>
              <FormControl.Label>Book Image(s)</FormControl.Label>
              <FormControl.HelperText>Maximum 3 images</FormControl.HelperText>
            </Stack>
            <Box flexDirection='row'>
              <Box>
                <Button h='86px' w='66px'>
                  +
                </Button>
              </Box>
            </Box>
          </HStack>
        </FormControl>
        <Divider my={3} bg='lightgrey' />
        <FormControl>
          <HStack justifyContent='space-between'>
            <FormControl.Label>Language</FormControl.Label>
            <Input
              w='70%'
              placeholder='English'
              borderWidth='0'
              textAlign='right'
              borderRadius={10}
              onChangeText={text => {
                setBookObj({ ...bookObj, language: text });
              }}
            />
          </HStack>
        </FormControl>
        <Divider my={2} bg='lightgrey' />
        <FormControl>
          <HStack justifyContent='space-between'>
            <FormControl.Label pr={2}>Genre</FormControl.Label>
            <Input
              w='70%'
              placeholder='Fiction'
              borderWidth='0'
              textAlign='right'
              borderRadius={10}
              onChangeText={text => {
                setBookObj({ ...bookObj, genre: text });
              }}
            />
          </HStack>
        </FormControl>
        <Divider my={2} bg='lightgrey' />
        <FormControl>
          <HStack justifyContent='space-between'>
            <FormControl.Label pr={2}>Edition</FormControl.Label>
            <Input
              w='70%'
              placeholder='Fifth'
              borderWidth='0'
              textAlign='right'
              borderRadius={10}
              onChangeText={text => {
                setBookObj({ ...bookObj, edition: text });
              }}
            />
          </HStack>
        </FormControl>
        <Divider my={2} bg='lightgrey' />
        <FormControl>
          <HStack justifyContent='space-between'>
            <FormControl.Label pr={2}>ISBN</FormControl.Label>
            <Input
              w='70%'
              placeholder='9780771002229'
              borderWidth='0'
              textAlign='right'
              borderRadius={10}
              onChangeText={text => {
                setBookObj({ ...bookObj, ISBN: text });
              }}
            />
          </HStack>
        </FormControl>
        <Divider my={2} bg='lightgrey' />
        <FormControl>
          <HStack justifyContent='space-between'>
            <FormControl.Label pr={2}>Book Condition</FormControl.Label>
            <Select
              minWidth='70%'
              placeholder='Select a condition'
              textAlign='right'
              selectedValue={bookCondition}
              onValueChange={condition => {
                setBookCondition(condition);
                setBookObj({ ...bookObj, bookCondition: condition });
              }}
              _selectedItem={{
                endIcon: <CheckIcon color='teal.600' size='5' />,
              }}
              borderWidth='0'
            >
              <Select.Item label='Like New' value='like-new' />
              <Select.Item label='Special Care Needed' value='special-care-needed' />
            </Select>
          </HStack>
        </FormControl>
      </Stack>
    </>
  );
};

export default BookDetail;
