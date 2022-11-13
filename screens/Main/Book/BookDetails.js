import { FormControl, Stack, Input, HStack, Button, Divider, Select, CheckIcon, Box, Image } from 'native-base';
import { useState, useEffect } from 'react';
import { BlueShades, WhiteShades } from '../../../assets/style/color';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet } from 'react-native';

const BookDetail = ({ bookObj, setBookObj }) => {
  const [bookCondition, setBookCondition] = useState('');
  const [imageArr, setImageArr] = useState([]);

  const HandleImageEventClick = async () => {
    let showSizeError = false;

    if (imageArr.length < 3) {
      // const { status } = await ImagePicker.requestCameraPermissionsAsync();

      // if (status !== 'granted') {
      //   alert('Sorry, we need camera permissions to make this work!');
      // }

      // let result = await ImagePicker.launchCameraAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.All,
      //   allowsEditing: true,
      //   aspect: [4, 3],
      //   quality: 1,
      // });

      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 3,
        allowsMultipleSelection: true,
        selectionLimit: 3 - imageArr.length,
      });

      if (!result.cancelled) {
        const uploadedURIs = result.selected
          .filter(item => {
            // if the size of the image is > 2mb, don't add that to array and set show error is true
            if (item.fileSize / 1024 / 1024 > 2) {
              showSizeError = true;
              return false;
            }

            return true;
          })
          .map(item => item.uri);

        setImageArr([...imageArr, ...uploadedURIs]);

        if (showSizeError) {
          alert('Please upload images less than 2MB.');
        }
      }
    } else {
      alert("You can't add more than 3 images");
    }
  };

  const HandleCancelImage = uri => {
    imageArr.splice(uri, 1);
    setImageArr([...imageArr]);
  };

  useEffect(() => {
    setBookObj({ ...bookObj, images: [...imageArr] });
  }, [imageArr]);

  return (
    <>
      <FormControl.Label>DETAILS</FormControl.Label>
      <Stack padding={2} w='100%' backgroundColor={BlueShades.tertiaryBlue} borderRadius={5}>
        <FormControl>
          <HStack justifyContent='space-between' alignItems='center'>
            <Stack>
              <FormControl.Label>Book Image(s)</FormControl.Label>
              <FormControl.HelperText>Maximum 3 images</FormControl.HelperText>
            </Stack>
            <Box style={{ display: 'flex', flexDirection: 'row' }}>
              {imageArr.map((imageURL, index) => {
                return (
                  <Box key={index} style={{ position: 'relative' }}>
                    <Image
                      source={{ uri: imageURL }}
                      alt='Alternate Text'
                      size='sm'
                      resizeMode='cover'
                      borderRadius={5}
                      mx={1}
                    />
                    <Button
                      style={styles.floatingBtnStyle}
                      bg={BlueShades.primaryBlue}
                      _text={{ color: WhiteShades.primaryWhite }}
                      size='xs'
                      onPress={e => {
                        e.preventDefault();
                        HandleCancelImage(index);
                      }}
                    >
                      X
                    </Button>
                  </Box>
                );
              })}
              <Box>
                <Button
                  height={65}
                  width={60}
                  bg={BlueShades.primaryBlue}
                  _text={{
                    color: WhiteShades.primaryWhite,
                  }}
                  onPress={HandleImageEventClick}
                >
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
              value={bookObj.language} // eslint-disable-line react/prop-types
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
              value={bookObj.genre} // eslint-disable-line react/prop-types
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
              value={bookObj.edition} // eslint-disable-line react/prop-types
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
              value={bookObj.ISBN} // eslint-disable-line react/prop-types
              borderRadius={10}
              onChangeText={text => {
                setBookObj({ ...bookObj, ISBN: parseInt(text) });
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
              <Select.Item label='Like New' value='Like New' />
              <Select.Item label='Very Good' value='Very Good' />
              <Select.Item label='Good' value='Good' />
              <Select.Item label='Fair' value='Fair' />
              <Select.Item label='Poor' value='Poor' />
            </Select>
          </HStack>
        </FormControl>
      </Stack>
    </>
  );
};

const styles = StyleSheet.create({
  floatingBtnStyle: {
    position: 'absolute',
    right: 0,
    top: -5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // You should only need this
    height: 10,
    width: 10,
    borderRadius: 100,
  },
});

export default BookDetail;
