import React from 'react';
import {View, StyleSheet} from 'react-native';
import ShopCart from './ShopCart';
import useGetProducts from '../hooks/get-product-hook';
import {useContext} from 'react';
import ShopContext from '../Common/ShopContext';
export default function Shop() {
  const products = useGetProducts();
  //const {onPress} = props;
  const context = useContext(ShopContext);
  const listItems = context.products?.map(products => (
    <View style={styles.containerItem} key={products.id}>
      <ShopCart
        price={products.price}
        about={products.product_name}
        img={products.avatar}
        onPress={context.addProductToCart.bind(this, products)}
      />
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
