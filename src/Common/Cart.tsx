import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

export default function Cart(props) {
  const {onPress} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image
        source={require('../../assets/icons/cart.png')}
        style={styles.img}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'left',
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  },
  img: {
    width: 30,
    height: 30,
  },
});
