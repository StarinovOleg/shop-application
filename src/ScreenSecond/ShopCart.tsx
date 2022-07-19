import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ButtonAdd from './ButtonAdd';
export default function ShopCart(props) {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <ButtonAdd onPress={onPress} />
      <Image style={styles.picture} source={{uri: props.img}} />
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
    height: 200,
  },
  price: {
    textAlign: 'center',
  },
  about: {
    textAlign: 'left',
  },
  picture: {
    width: '100%',
    borderRadius: 10,
    height: '50%',
  },
});
