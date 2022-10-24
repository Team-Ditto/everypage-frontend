import React from 'react';
import { Box, VStack, Button, Text, FormControl, Input, Link, ScrollView } from 'native-base';
import { StyleSheet } from 'react-native';
import FieldSet from 'react-native-fieldset';

const Location = ({ navigation }) => {
  return (
    <ScrollView>
      <Box>
        {/* <Text style={styles.heading}>Location</Text> */}
        <Link style={[styles.skipButton, { textDecoration: 'none' }]} onPress={() => {}}>
          Skip
        </Link>
        <VStack style={styles.container}>
          <VStack>
            <Text style={[styles.heading, { lineHeight: '50' }]}>Set Your Library Location.</Text>
            <Text style={{ lineHeight: '50' }}>Set it now or update in your profile</Text>
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

          {/* <FormControl>
            <FormControl.Label style={styles.legend}>Your Zip Code</FormControl.Label>
            <Input placeholder='xxx xxx' keyboardType='default' returnKeyType='next' />
            <FormControl.ErrorMessage>Zip code is required</FormControl.ErrorMessage>

          </FormControl> */}
          <VStack>
            <Text>Use my current loaction</Text>
            {/* geo loaction goes here */}

            <Button onPress={() => {}}>Next</Button>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  skipButton: {
    color: 'gray',
    textDecoration: 'none',
    flexDirection: 'row-reverse',
    justifyContent: ' flex-end',
    // backgroundColor: 'red',
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    padding: 30,
  },
  heading: {
    fontSize: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.3)',
  },
  legend: {
    // backgroundColor: 'red',
    color: 'black',
    // position: 'absolute',
    // bottom: 10,
  },
  fieldSet: {
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#000',
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
  },
});

export default Location;
