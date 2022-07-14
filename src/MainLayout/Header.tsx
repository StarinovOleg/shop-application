import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cart from '../Common/Cart';
export default function Header(props) {
  const {count, onPress} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>May Phong Flowers</Text>
      <Text style={styles.textOrder}>{count}</Text>
      <View style={styles.align}>
        <Cart onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3D5CE',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
    color: '#661A0A',
    fontFamily: 'Pacifico-Regular',
    margin: 6,
  },
  textOrder: {
    fontSize: 20,
    color: 'brown',
    marginTop: 20,
    fontFamily: 'Pacifico-Regular',
  },
  align: {
    marginTop: 32,
    marginLeft: 10,
    marginRight: 10,
  },
});
