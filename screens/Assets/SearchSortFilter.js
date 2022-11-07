import { Checkbox, IconButton, Radio } from 'native-base';
import React, { Component, useState } from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, RadioButton, Button } from 'react-native';
import { sort, genre, location, language, readingStatus } from '../../constants/FilterContent';

const SearchSortFilter = item => {
  const [checked, setChecked] = React.useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);

  const onSelect = () => {};

  // Put sort genre location language in one array.
  //  const [radioButtons, setRadioButtons] = useState(radioButtonsData)
  //  <RadioGroup
  //   radioButtons={radioButtons}
  //   onPress={onPressRadioButton}
  // />

  const data = [sort, genre, location, language, readingStatus];
  const [radioButtons, setRadioButtons] = useState(data);

  return (
    <ScrollView>
      <View style={styles.radioUnderline}>
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowSort(!showSort)}>
          <Text>Sort</Text>
          <Text onPress={() => setOptionSelected(!optionSelected)}></Text>
          {/* Display the selected option from the drop down */}
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            alt='dropdown'
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
                    <Radio value={item} onPress={() => setChecked(!checked)}>
                      {item}
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
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowGenre(!showGenre)}>
          <Text>Genre</Text>
          <Text onPress={() => setOptionSelected(!optionSelected)}></Text>
          {/* Display the selected option from the drop down */}
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            alt='dropdown'
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
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowLanguage(!showLanguage)}>
          <Text>Laguage</Text>
          <Text onPress={() => setOptionSelected(!optionSelected)}></Text>
          {/* Display the selected option from the drop down */}
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            alt='dropdown'
            transform={[{ rotate: showLanguage ? '180deg' : '0deg' }]}
          />
        </TouchableOpacity>

        {showLanguage && (
          <View>
            {language.map((item, i) => {
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
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowReading(!showReading)}>
          <Text>Reading Status</Text>

          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            alt='dropdown'
            transform={[{ rotate: showReading ? '180deg' : '0deg' }]}
          />
        </TouchableOpacity>

        {showReading && (
          <View>
            {readingStatus.map((item, i) => {
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
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowLocation(!showLocation)}>
          <Text>Location</Text>
          <Text onPress={() => setOptionSelected(!optionSelected)}></Text>
          {/* Display the selected option from the drop down */}
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.icon}
            alt='dropdown'
            transform={[{ rotate: showLocation ? '180deg' : '0deg' }]}
          />
        </TouchableOpacity>

        {showLocation && (
          <View>
            {location.map((item, i) => {
              return (
                <View style={styles.radioButtton}>
                  <Text key={String(i)}>{item.name}</Text>
                  <Radio.Group name={item.name}>
                    <Radio value={item.id} onPress={() => setChecked(!checked)}></Radio>
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
    </ScrollView>
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
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
  },
  radioUnderline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default SearchSortFilter;
