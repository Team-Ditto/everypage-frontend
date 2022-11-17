import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Text, View, StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + data;

    axios.get(url).then(response => {
      if (
        response !== undefined &&
        response.data !== undefined &&
        response.data.items !== undefined &&
        response.data.items.length > 0
      ) {
        var book = response.data.items[0];

        console.log('BOOK DATA FROM GOOGLE : ', book); // eslint-disable-line no-console
        navigation.navigate('AddBook', { book: book, ISBN: data });
      } else {
        console.log('BOOK NOT FOUND'); // eslint-disable-line no-console
      }
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
