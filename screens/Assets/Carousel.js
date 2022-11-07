import { View, Image, ScrollView, CircleIcon, Text } from 'native-base';
import { useState } from 'react';

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
      <Image
        w='100%'
        h='50%'
        source={{
          uri: props.images[state.active],
        }}
        alt='Book Image'
        style={{ zIndex: -3, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)' }}
      />
      <View
        w='100%'
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
        pt={10}
        style={{ backgroundColor: 'rgba(43, 43, 43, 0.9)' }}
      >
        <View h='235px' w='135px' justifyContent='center' alignItems='center'>
          <ScrollView
            horizontal
            pagingEnabled
            showHorizontalScrollIndicator={true}
            w='100%'
            overflow='visible'
            onScroll={handleScroll}
            scrollEventThrottle={2}
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
