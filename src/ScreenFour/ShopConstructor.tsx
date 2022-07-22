import React from 'react';
import {View, StyleSheet} from 'react-native';
import ShopCartConstructor from './ShopCartConstructor';
import {useContext} from 'react';
import ShopContext from '../Common/ShopContext';

export default function Shop() {
  const context = useContext(ShopContext);

  const listItems = context.products?.map(products => (
    <View style={styles.containerItem} key={products.id}>
      <ShopCartConstructor
        price={products.price}
        about={products.product_name}
        img={products.avatar}
        onPress={context.addProductToCart.bind(this, products)}
      />
    </View>
  ));

  return <View style={styles.container}>{listItems}</View>;
}

const styles = StyleSheet.create({});
