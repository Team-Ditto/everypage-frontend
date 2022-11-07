import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../../assets/dropdown.png')} alt='Dropdown Image' />
        <Text style={styles.text}>Hi Mita, welcome to everypage!</Text>
        <Text style={styles.content}>
          Now that you have your digital bookshelf setup. Let's addsome books to your Library
        </Text>
      </View>
      <Image style={styles.downArrow} source={require('../../assets/DownwardArrow.png')} alt='Downward Arrow' />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderRadius: 10,
    padding: 30,
  },
  text: {
    fontSize: 30,
    padding: 10,
    lineHeight: 30,
  },
  content: {
    fontSize: 18,
    padding: 10,
    lineHeight: 30,
  },
  downArrow: {
    position: 'absolute',
    bottom: 8,
    right: 50,
  },
});

export default WelcomeScreen;
