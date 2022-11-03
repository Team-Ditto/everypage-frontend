import { View, Image, ScrollView, CircleIcon, Text, Box } from 'native-base';
import { useState } from 'react';

const imageArray = [
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg',
];
const Carousel = props => {
  const [state, setState] = useState({ active: 0 });
  const handleScroll = event => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    if (slide !== state.active) {
      setState({ active: slide });
    }
  };
  return (
    <>
      <View justifyContent='center' alignItems='center' flexDirection='row' pt={10}>
        <View h='235px' w='180px' justifyContent='center' alignItems='center'>
          <ScrollView
            horizontal
            pagingEnabled
            showHorizontalScrollIndicator={true}
            w='140px'
            overflow='visible'
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {props.images.map((img, key) => (
              <Image
                key={key}
                w='120px'
                h='160px'
                m={2}
                source={{
                  uri: img,
                }}
                alt='book cover'
                borderRadius='10px'
              />
            ))}
          </ScrollView>
          <View flexDirection='row' position='absolute' bottom={7}>
            {props.images.map((i, k) => (
              <Text key={k} mx={1}>
                <CircleIcon color={k == state.active ? '#1a1b1c' : '#babbbc'} />
              </Text>
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default Carousel;
