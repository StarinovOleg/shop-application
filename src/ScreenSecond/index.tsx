import React from 'react';

import Header from '../MainLayout/Header';
import {ScrollView, StyleSheet, View, Button, Text} from 'react-native';
import ButtonBack from './ButtonBack';
import Shop from './Shop';
import {useContext} from 'react';
import ShopContext from '../Common/ShopContext';

export default function ScreenSecond(props) {
  const count = 0;
  const onCheckout = () => {
    props.navigation.navigate('ScreenThree');
  };
  const {val, setVal} = useContext(ShopContext);
  const context = useContext(ShopContext);
  const listItems = context.cart.map(cartItem => (
    <View key={cartItem.id}>
      <Text>{cartItem.name}</Text>
    </View>
  ));
  return (
    <View style={styles.backgroundBody}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.viewContainer}>
        <Header count={count} onPress={onCheckout} />
        <ButtonBack onPress={() => props.navigation.goBack()} />
        <Text>{listItems}</Text>
        <Shop />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundBody: {flex: 1, backgroundColor: '#F9C0E7'},
  viewContainer: {
    backgroundColor: '#F3D5CE',
    margin: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,
  },
});
