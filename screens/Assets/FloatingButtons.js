import { Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { BlackShades, BlueShades, whiteShades } from '../../assets/style/color';

const FloatingButtons = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <Button
        style={Styles.floatingBtnStyle}
        onPress={() => {
          // navigation.navigate("AddBook");
          setIsPressed(prevState => !prevState);
          // console.log(isPressed);
        }}
      >
        <Icon
          color={whiteShades.primaryWhite}
          as={
            !isPressed ? (
              <AntDesign name='plus' style={{ fontSize: '33px', color: whiteShades.primaryWhite }} />
            ) : (
              <Ionicons name='close' style={{ fontSize: '33px', color: whiteShades.primaryWhite }} />
            )
          }
          size='sm'
        />
      </Button>
      {isPressed && (
        <>
          <Button
            style={[
              Styles.floatingBtnStyle,
              {
                transform: [{ translateX: -90 }, { translateY: -10 }],
                width: 50,
                height: 50,
              },
            ]}
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
                    color: whiteShades.primaryWhite,
                  }}
                />
              }
            />
          </Button>
          <Button
            style={[
              Styles.floatingBtnStyle,
              {
                transform: [{ translateX: -10 }, { translateY: -90 }],
                width: 50,
                height: 50,
              },
            ]}
            onPress={() => {
              navigation.navigate('AddBook');
            }}
          >
            <Icon
              as={
                <AntDesign
                  name='edit'
                  style={{
                    fontSize: '22px',
                    color: whiteShades.primaryWhite,
                  }}
                />
              }
            />
          </Button>
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
    bottom: 200,
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
