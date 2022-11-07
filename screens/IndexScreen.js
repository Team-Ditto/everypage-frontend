import { AntDesign } from '@expo/vector-icons';
import { Fab, Icon, Text, VStack } from 'native-base';
import { useContext, useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import Home from './Main/Index';

const IndexScreen = ({ navigation }) => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    //over here right now I am doing as per wireframes
    // but when we get user from backend we will have
    // user name setup  for the user.
    //=============================
    navigation.setOptions({
      title: ` ${currentUser.displayName}'s Library`,
      //  value === "" ? "No title" : value,
    });
    // =============================
  }, [navigation]);
  return (
    <VStack style={Style.mainContainerStyle} bg='muted.50'>
      <Home style={{ flex: 1 }} navigation={navigation} />
    </VStack>
  );
};

const Style = StyleSheet.create({
  mainContainerStyle: {
    position: 'relative',
    flex: 1,
    height: '100%',
  },
});

export default IndexScreen;
