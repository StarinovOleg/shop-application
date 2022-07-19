import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import ShopCart from './ShopCart';
import useGetProducts from '../hooks/get-product-hook';
export default function Shop(props) {
  const products = useGetProducts();
  const {onPress} = props;
  const listItems = products?.map((item, index) => (
    <View style={styles.containerItem} key={index}>
      <ShopCart
        price={item.price}
        about={item.product_name}
        img={item.avatar}
        /* onPress={() => {
          Alert.alert('ok');
        }}*/
        onPress={onPress}
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
