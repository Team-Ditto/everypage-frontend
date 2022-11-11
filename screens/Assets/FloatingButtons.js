import { Button, Icon } from 'native-base';
import { Animated, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { BlueShades, whiteShades } from '../../assets/style/color';

const FloatingButtons = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  return (
    <>
      <Button
        style={Styles.floatingBtnStyle}
        onPress={() => {
          // navigation.navigate("AddBook");
          setIsPressed(prevState => !prevState);
          // console.log(isPressed);
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }}
      >
        <Icon
          color={WhiteShades.primaryWhite}
          as={
            !isPressed ? (
              <AntDesign name='plus' style={{ fontSize: '33px', color: WhiteShades.primaryWhite }} />
            ) : (
              <Ionicons name='close' style={{ fontSize: '33px', color: WhiteShades.primaryWhite }} />
            )
          }
          size='sm'
        />
      </Button>
      {isPressed && (
        <>
          <Animated.View
            style={[
              Styles.floatingBtnStyle,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    translateX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -90], // 0 : 150, 0.5 : 75, 1 : 0
                    }),
                  },
                ],
                width: 50,
                height: 50,
              },
            ]}
          >
            <Button
              variant={'unstyled'}
              onPress={() => {
                navigation.navigate('Scanner');
              }}
            >
              <Icon
                as={
                  <AntDesign
                    name='barcode'
                    style={{
                      fontSize: '22px',
                      color: WhiteShades.primaryWhite,
                    }}
                  />
                }
              />
            </Button>
          </Animated.View>
          <Animated.View
            style={[
              Styles.floatingBtnStyle,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    translateY: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -90], // 0 : 150, 0.5 : 75, 1 : 0
                    }),
                  },
                ],
                width: 50,
                height: 50,
              },
            ]}
          >
            <Button
              onPress={() => {
                navigation.navigate('AddBook');
              }}
              variant={'unstyled'}
            >
              <Icon
                as={
                  <AntDesign
                    name='edit'
                    style={{
                      fontSize: '22px',
                      color: WhiteShades.primaryWhite,
                    }}
                  />
                }
              />
            </Button>
          </Animated.View>
        </>
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  floatingBtnStyle: {
    backgroundColor: BlueShades.primaryBlue,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    bottom: 10,
    width: 70,
    height: 70,
    right: 10,
    borderColor: 'grey',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  buttonSliderContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '10',
  },
});

export default FloatingButtons;
