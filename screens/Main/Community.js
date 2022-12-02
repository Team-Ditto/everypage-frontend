import { VStack, Text, HStack, Box, ScrollView, Link, ChevronRightIcon, View, Image } from 'native-base';
import { StyleSheet, ViewBase } from 'react-native';
import Search from '../Assets/Search';
import { useState, useEffect, useContext, useCallback } from 'react';
import Filter from '../Assets/FilterSettings/Filter';
import { BlueShades, OrangeShades } from '../../assets/style/color';
import { LibraryData } from '../../constants/LibraryData';
import MyLibraryCard from '../Cards/Library/MyLibraryCard';
import libImage1 from '../../assets/libImage1.png';

export default function Community({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [shelfLocations, setShelfLocations] = useState([]);
  const [libData, setLibData] = useState(LibraryData);
  const [filterSetting, setFilterSetting] = useState({
    sort: 'Newly Added',
    genre: 'Action & Adventure',
    readingStatus: 'To Read',
    location: shelfLocations.length > 0 ? shelfLocations[0] : '',
  });

  const ApplyFilterSettings = async () => {
    let filterData = await GetFilteredResults(filterSetting, searchText);
    if (filterData !== undefined) {
      setLibData(filterData.data.results);
      setFilteredData(filterData.data.results);
    }
    setSpinnerVisible(false);
  };

  const onSearchSubmitted = async () => {
    if (searchText.length > 0) {
      let filterData = await GetFilteredResults(filterSetting, searchText);
      if (filterData !== undefined) {
        console.log('filterData', filterData.data.results.length);
        setLibData(filterData.data.results);
        setFilteredData(filterData.data.results);
        setSearchResultLabel(`Search Results for "${searchText}"`);
        navigation.setOptions({
          title: `Search Results`,
        });
      }
    } else {
      fetchData();
      setSearchResultLabel('');
    }
  };

  return (
    <VStack>
      <ScrollView>
        <HStack justifyContent='space-between' mx={15} mt={2}>
          <Text fontWeight='bold'>My Communities</Text>
          <Link>
            view all <ChevronRightIcon name='arrow-right' size={5} />
          </Link>
        </HStack>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Box style={styles.communites}>
            <Image source={require('../../assets/libImage1.png')} alt='community' style={styles.image} />
            <VStack>
              <Text style={styles.text} paddingTop={3} fontWeight='bold'>
                East Van Potterheads
              </Text>
              <Text style={styles.text}>230 members</Text>
            </VStack>
          </Box>
          <Box style={styles.communites}>
            <Image source={require('../../assets/libImage2.png')} alt='community' style={styles.image} />
            <VStack>
              <Text style={styles.text} paddingTop={3} fontWeight='bold'>
                Tribute Mockings
              </Text>
              <Text style={styles.text} paddingBottom={2}>
                198 members
              </Text>
            </VStack>
          </Box>
          <Box style={styles.communites}>
            <Image source={require('../../assets/libImage3.png')} alt='community' style={styles.image} />
            <VStack>
              <Text style={styles.text} paddingTop={3} fontWeight='bold'>
                Langaraians
              </Text>
              <Text style={styles.text}>1290 members</Text>
            </VStack>
          </Box>
        </ScrollView>
        <HStack justifyContent='space-between' mx={15}>
          <Text fontWeight='bold'>Recommended for you</Text>
          <Link>
            view all <ChevronRightIcon name='arrow-right' size={5} />
          </Link>
        </HStack>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Box style={styles.communites}>
            <Image source={require('../../assets/libImage3.png')} alt='community' style={styles.image} />
            <VStack>
              <Text style={styles.text} paddingTop={3} fontWeight='bold'>
                Community of Wizard
              </Text>
              <Text style={styles.text}>126 members</Text>
            </VStack>
          </Box>
          <Box style={styles.communites}>
            <Image source={require('../../assets/libImage4.png')} alt='community' style={styles.image} />
            <VStack>
              <Text style={styles.text} paddingTop={3} fontWeight='bold'>
                Team Bridgerton
              </Text>
              <Text style={styles.text} paddingBottom={2}>
                65 members
              </Text>
            </VStack>
          </Box>
          <Box style={styles.communites}>
            <Image source={require('../../assets/libImage1.png')} alt='community' style={styles.image} />
            <VStack>
              <Text style={styles.text} paddingTop={3} fontWeight='bold'>
                Falcons
              </Text>
              <Text style={styles.text}>190 members</Text>
            </VStack>
          </Box>
        </ScrollView>

        <HStack
          justifyContent='space-between'
          mx={15}
          my={5}
          paddingTop={6}
          borderTopWidth={1}
          borderTopColor={BlueShades.primaryBlue}
        >
          <Text fontWeight='bold'>Books you might like</Text>
          <Link>
            view all <ChevronRightIcon name='arrow-right' size={5} />
          </Link>
        </HStack>
        <VStack mx={5}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Box py={3} w='15%' flexDirection='row' justifyContent='space-between' borderRadius={4}>
              {/* <FontAwesome name='favorite' size={24} color='black' /> */}
              {libData.map((data, id) => {
                return <MyLibraryCard key={id} data={data} navigation={navigation} showWishListIcon={true} />;
              })}
            </Box>
          </ScrollView>
        </VStack>
      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  text: {
    color: BlueShades.primaryBlue,
  },
  image: {
    width: 200, //change here
    height: 90,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  communites: {
    backgroundColor: OrangeShades.quaternaryOrange,
    flex: 1,
    maxWidth: 500, //change here
    marginTop: 20,
    marginLeft: 15,
    // marginHorizontal: 10,
    marginVertical: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: OrangeShades.primaryOrange,
  },
  text: {
    paddingRight: 10,
    paddingLeft: 10,
    textAlign: 'left',
  },
});
