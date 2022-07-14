import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ButtonAdd from './ButtonAdd';
export default function ShopCart(props) {
  return (
    <View style={styles.container}>
      <ButtonAdd />
      <Image source={require('../../assets/icons/back-arrow.png')} />
      <Text style={styles.price}>{props.price}</Text>
      <Text style={styles.about}>Include:{props.about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    margin: 2,
    textAlign: 'center',
    width: 150,
    height: 300,
  },
  price: {
    textAlign: 'center',
  },
  about: {
    textAlign: 'left',
  },
});
