import { Checkbox, IconButton, Radio } from 'native-base';
import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const sort = [
  {
    id: 1,
    name: 'Newly Added',
  },
  {
    id: 2,
    name: 'Book Title (A-Z)',
  },
  {
    id: 3,
    name: 'Book Title (Z-A)',
  },
];

const genre = [
  {
    id: 1,
    name: 'Sc-fi',
  },
  {
    id: 2,
    name: 'Fantasy',
  },
  {
    id: 3,
    name: 'Romance',
  },
  {
    id: 4,
    name: 'Mystery',
  },
  {
    id: 5,
    name: 'Horror',
  },
];

const location = [
  {
    id: 1,
    name: 'Burnaby',
  },
  {
    id: 2,
    name: 'Vancouver',
  },
  {
    id: 3,
    name: 'Surry',
  },
];

const SearchSortFilter = (item) => {
  const [checked, setChecked] = React.useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);

  const onSelect = () => {};

  return (
    <View>
      <View style={styles.radioUnderline}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowSort(!showSort)}
        >
          <Text>Sort</Text>
          <Text onPress={() => setOptionSelected(!optionSelected)}></Text>
          {/* Display the selected option from the drop down */}
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            transform={[{ rotate: showSort ? '180deg' : '0deg' }]}
          />
        </TouchableOpacity>

        {showSort && (
          <View>
            {sort.map((item, i) => {
              return (
                <View style={styles.radioButtton}>
                  {/* <Text key={String(i)}>{item.name}</Text> */}
                  <Radio.Group>
                    <Radio value={item.id} onPress={() => setChecked(!checked)}>
                      {item.name}
                    </Radio>
                  </Radio.Group>
                  {/* <Checkbox title={item.id} checkedIcon="dot-circle-o">
                        {item.name}
                        </Checkbox> */}
                </View>
              );
            })}
          </View>
        )}
      </View>

      {/* Genre */}

      <View style={styles.radioUnderline}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowGenre(!showGenre)}
        >
          <Text>Genre</Text>
          <Text onPress={() => setOptionSelected(!optionSelected)}></Text>
          {/* Display the selected option from the drop down */}
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            transform={[{ rotate: showGenre ? '180deg' : '0deg' }]}
          />
        </TouchableOpacity>

        {showGenre && (
          <View>
            {genre.map((item, i) => {
              return (
                <View style={styles.radioButtton}>
                  {/* <Text key={String(i)}>{item.name}</Text> */}
                  <Radio.Group>
                    <Radio value={item.id} onPress={() => setChecked(!checked)}>
                      {item.name}
                    </Radio>
                  </Radio.Group>
                  {/* <Checkbox title={item.id} checkedIcon="dot-circle-o">
                        {item.name}
                        </Checkbox> */}
                </View>
              );
            })}
          </View>
        )}
      </View>

      {/* Language */}

      <View style={styles.radioUnderline}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowLanguage(!showLanguage)}
        >
          <Text>Laguage</Text>
          <Text onPress={() => setOptionSelected(!optionSelected)}></Text>
          {/* Display the selected option from the drop down */}
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            transform={[{ rotate: showLanguage ? '180deg' : '0deg' }]}
          />
        </TouchableOpacity>

        {showLanguage && (
          <View>
            {sort.map((item, i) => {
              return (
                <View style={styles.radioButtton}>
                  {/* <Text key={String(i)}>{item.name}</Text> */}
                  <Radio.Group>
                    <Radio value={item.id} onPress={() => setChecked(!checked)}>
                      {item.name}
                    </Radio>
                  </Radio.Group>
                  {/* <Checkbox title={item.id} checkedIcon="dot-circle-o">
                        {item.name}
                        </Checkbox> */}
                </View>
              );
            })}
          </View>
        )}
        
      </View>

      {/*Reading Status  */}

      <View style={styles.radioUnderline}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowReading(!showReading)}
        >
          <Text>Reading Status</Text>

          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            transform={[{ rotate: showReading ? '180deg' : '0deg' }]}
          />
        </TouchableOpacity>

        {showReading && (
          <View>
            {sort.map((item, i) => {
              return (
                <View style={styles.radioButtton}>
                  {/* <Text key={String(i)}>{item.name}</Text> */}
                  <Radio.Group>
                    <Radio value={item.id} onPress={() => setChecked(!checked)}>
                      {item.name}
                    </Radio>
                  </Radio.Group>
                  {/* <Checkbox title={item.id} checkedIcon="dot-circle-o">
                        {item.name}
                        </Checkbox> */}
                </View>
              );
            })}
          </View>
        )}
      </View>

      {/* Location */}

      <View style={styles.radioUnderline}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowLocation(!showLocation)}
        >
          <Text>Location</Text>
          <Text onPress={() => setOptionSelected(!optionSelected)}></Text>
          {/* Display the selected option from the drop down */}
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            transform={[{ rotate: showLocation ? '180deg' : '0deg' }]}
          />
        </TouchableOpacity>

        {showLocation && (
          <View>
            {location.map((item, i) => {
              return (
                <View style={styles.radioButtton}>
                  {/* <Text key={String(i)}>{item.name}</Text> */}
                  <Radio.Group>
                    <Radio value={item.id} onPress={() => setChecked(!checked)}>
                      {item.name}
                    </Radio>
                  </Radio.Group>
                  {/* <Checkbox title={item.id} checkedIcon="dot-circle-o">
                        {item.name}
                        </Checkbox> */}
                </View>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    // backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    borderRadius: 6,
    minHeight: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // margin: 20,
    alignItems: 'center',
  },
  icon: {
    width: 34,
    height: 34,
  },
  textDisplay: {
    flexDirection: 'column',
  },
  radioButtton: {
    flexDirection: 'row',
    justifyContent: 'start',
    padding: 5,
    margin: 5,
  },
  radioUnderline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});

export default SearchSortFilter;

//   import { useEffect, useState } from "react";

// const SearchSortFilter = ({}) =>{

//     return(
//         <VStack>
//             <FormControl>
//                 <Select placeholder="Sort">

//                     <Select.Item label="Newly Added"/>
//                     <Select.Item label="Book Title (A-Z)"/>
//                     <Select.Item label="Book Title (Z-A)"/>

//                 <Radio.Group >
//                         <Radio >Newly Added</Radio>
//                         <Radio >Book Title (A-Z)</Radio>
//                         <Radio >Book Title (Z-A)</Radio>
//                    </Radio.Group>
//                    </Select>
//             </FormControl>
//         </VStack>
//     )
// }

// export default SearchSortFilter;
