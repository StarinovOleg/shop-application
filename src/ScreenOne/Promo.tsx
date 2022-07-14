import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
export default function Promo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/picture/promo.png')}
        style={styles.img}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 320,
  },
  img: {
    width: '100%',
  },
});
