import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { logout } from '../../firebase/firebase-service';
import { BlueShades, OrangeShades, whiteShades } from '../../assets/style/color';

import { Button, View, Text, Box, VStack, Link } from 'native-base';

const KnowMore = () => {
  const [colorChange, setColorChange] = useState(false);
  const [colorChange2, setColorChange2] = useState(0);
  const [colorChange3, setColorChange3] = useState(true);

  const [isPress, setIsPress] = useState(false);

  // const touchProps = {
  //   style: isPress ? [style.bgColor, style.reader] : style.reader,
  // };

  const handleTouch = () => {};

  return (
    <VStack style={style.container} px={5}>
      <Text style={style.headerText1}>You're almost there,</Text>
      <Text style={style.headerText2}>@username</Text>
      <Text style={style.headerText3}>What type of a reader are you?</Text>
      <Box>
        <VStack>
          <TouchableOpacity
            // onPress={handleTouch}
            // {...touchProps}
            onPress={{ backgroundColor: OrangeShades.primaryOrange }}
            style={style.reader}
            // style={colorChange ? [style.reader, { backgroundColor: OrangeShades.primaryOrange }] : style.reader}
          >
            <Text style={style.text}>Fast Reader</Text>
            <Text>Read one or more than one book in one day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.reader}

            // onPress={setColorChange2(1)}
            // style={colorChange2 == 1 ? [style.reader, { backgroundColor: OrangeShades.primaryOrange }] : style.reader}
          >
            <Text style={style.text}>Casual Reader</Text>
            <Text>Read one or more than one book in one day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.reader}
            // onPress={setColorChange3(false)}
            // style={colorChange3 ? [style.reader, { backgroundColor: OrangeShades.primaryOrange }] : style.reader}
          >
            <Text style={style.text}>Slow Reader</Text>
            <Text>Read one or more than one book in 3 days</Text>
          </TouchableOpacity>

          <View>
            <Button bg={BlueShades.primaryBlue} style={style.doneButton}>
              <Link textDecoration='none' textDecorationColor='white'>
                <Text color='white'>Done</Text>
              </Link>
            </Button>
          </View>
        </VStack>
      </Box>
    </VStack>
  );
};

const style = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  headerText1: {
    fontSize: 27,
    fontWeight: 'bold',
    paddingTop: 30,
    lineHeight: 20,
  },
  headerText2: {
    fontSize: 27,
    fontWeight: 'bold',
    paddingTop: 10,
    lineHeight: 20,
  },
  headerText3: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 40,
    lineHeight: 20,
  },
  reader: {
    backgroundColor: '#FDF5EA',
    padding: 30,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#DC924C',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  doneButton: {
    width: '100%',
    borderRadius: 10,
    marginTop: 50,
    color: 'white',
  },
  doneLink: {
    color: 'white',
    textDecoration: 'none',
  },
  bgColor: {
    backgroundColor: OrangeShades.primaryOrange,
  },
});

export default KnowMore;
