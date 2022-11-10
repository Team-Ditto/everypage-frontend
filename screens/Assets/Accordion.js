import { StyleSheet, TouchableOpacity, Animated, LayoutAnimation } from 'react-native';
import React, { useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { toggleAnimation } from './Animation/toggleAnimation';
import { View, Text, Radio, Divider } from 'native-base';

export default function Accordion({ title, content, filterSetting, handleFilterSetting }) {
  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleList = () => {
    Animated.timing(animationController, {
      toValue: showContent ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => toggleList()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <MaterialIcons name='keyboard-arrow-right' size={24} color='black' />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {showContent && (
        <View style={styles.body}>
          <Radio.Group
            defaultValue={content[0]}
            name='filterSettingRadioGroup'
            accessibilityLabel='Filter Settings'
            value={filterSetting[title.toLowerCase()]}
            onChange={value => {
              handleFilterSetting(title.toLowerCase(), value);
            }}
          >
            {content.map((item, index) => (
              <View key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                <Radio value={item} style={{ display: 'flex', flexDirection: 'row-reverse', alignSelf: 'flex-start' }}>
                  {item}
                </Radio>
                <Divider my={3} w={200} bg='lightgrey' />
              </View>
            ))}
          </Radio.Group>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: '2%',
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    color: '#2d2d2d',
    fontWeight: 'bold',
  },
  body: {
    paddingHorizontal: '2%',
    paddingVertical: '10%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
