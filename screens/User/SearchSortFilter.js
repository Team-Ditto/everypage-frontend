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
    }
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
        <View>
            <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowSort(!showSort)}
            >
            <Text>Sort</Text>
            <Text onPress={()=> setOptionSelected(!optionSelected)}></Text> 
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
                    <View>
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

        <View>
            <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowOption(!showOption)}
            >
            <Text>Genre</Text>
            <Text onPress={()=> setOptionSelected(!optionSelected)}></Text> 
            {/* Display the selected option from the drop down */}
            <Image
                source={require('../../assets/dropdown.png')}
                style={styles.icon}
                transform={[{ rotate: showOption ? '180deg' : '0deg' }]}
            />
            </TouchableOpacity>
           

            {showOption && (
            <View>
                {genre.map((item, i) => {
                return (
                    <View>
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

        <View>
            <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowOption(!showOption)}
            >
            <Text>Laguage</Text>
            <Text onPress={()=> setOptionSelected(!optionSelected)}></Text> 
            {/* Display the selected option from the drop down */}
            <Image
                source={require('../../assets/dropdown.png')}
                style={styles.icon}
                transform={[{ rotate: showOption ? '180deg' : '0deg' }]}
            />
            </TouchableOpacity>

            {showOption && (
            <View>
                {sort.map((item, i) => {
                return (
                    <View>
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



        <View>
            <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowOption(!showOption)}
            >
            <Text>Reading Status</Text>
            <Text onPress={()=> setOptionSelected(!optionSelected)}></Text> 
            {/* Display the selected option from the drop down */}
            <Image
                source={require('../../assets/dropdown.png')}
                style={styles.icon}
                transform={[{ rotate: showOption ? '180deg' : '0deg' }]}
            />
            </TouchableOpacity>

            {showOption && (
            <View>
                {sort.map((item, i) => {
                return (
                    <View>
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

        <View>
            <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowOption(!showOption)}
            >
            <Text>Location</Text>
            <Text onPress={()=> setOptionSelected(!optionSelected)}></Text> 
            {/* Display the selected option from the drop down */}
            <Image
                source={require('../../assets/dropdown.png')}
                style={styles.icon}
                transform={[{ rotate: showOption ? '180deg' : '0deg' }]}
            />
            </TouchableOpacity>

            {showOption && (
            <View>
                {sort.map((item, i) => {
                return (
                    <View>
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
    backgroundColor: 'rgba(0,0,0,0.3)',
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
  textDisplay:{
    flexDirection: 'column',
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
