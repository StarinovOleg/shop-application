import React from 'react';
import {View, StyleSheet} from 'react-native';
import ShopCart from './ShopCart';

const shopItem = [
  {price: 1, about: 'rose'},
  {price: 2, about: 'rose'},
  {price: 3, about: 'rose'},
];

export default function Shop() {
  const listItems = shopItem.map((item, index) => (
    <View style={styles.containerItem} key={index}>
      <ShopCart price={item.price} about={item.about} />
    </View>
  ));
  return <View style={styles.container}>{listItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItem: {
    margin: 5,
  },
});
