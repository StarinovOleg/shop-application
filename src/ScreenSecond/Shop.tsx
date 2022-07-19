import React from 'react';
import {View, StyleSheet} from 'react-native';
import ShopCart from './ShopCart';
import useGetProducts from '../hooks/get-product-hook';
import {useContext} from 'react';
import ShopContext from '../Common/ShopContext';
export default function Shop() {
  const products = useGetProducts();
  //const {onPress} = props;
  const {val, setVal} = useContext(ShopContext);
  const listItems = products?.map((item, index) => (
    <View style={styles.containerItem} key={index}>
      <ShopCart
        price={item.price}
        about={item.product_name}
        img={item.avatar}
        onPress={() => setVal([item.price, item.product_name])}
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
