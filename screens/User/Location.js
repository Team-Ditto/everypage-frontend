import React from 'react';
import {
  Box,
  VStack,
  Button,
  FormControl,
  Input,
  Link,
  IconButton
} from 'native-base';
import { StyleSheet, Text, View } from "react-native"



const Location = ({ navigation }) => {
  return (

    <Box alignItems="center" px={5} >
        <Link
        _text={{
            color: 'gray',
            textDecoration: 'none',
            display: 'flex',
            justifyContent:'',
            flexDirection: 'row-reverse',
            backgroundColor: "red"
        }}
        onPress={() =>{}}>
        Skip
        </Link>
        <View>
            <Text>Set Your Library Location.</Text>
            <Text>Set it now or updtae in your profile</Text>
        </View>
       <FormControl>
            <FormControl.Label>Your Zip Code</FormControl.Label>
            <Input placeholder="xxx xxx" keyboardType="default" returnKeyType="next" />
            <FormControl.ErrorMessage>
                Zip code is required
            </FormControl.ErrorMessage>
       </FormControl>
       <View>
            <Text>Use my current loaction</Text>
            {/* geo loaction goes here */}

            <Button onPress={() =>{}} >Next</Button>
       </View>
    </Box>
    

  );
};


const styles = StyleSheet.create({
    
})




export default Location;
