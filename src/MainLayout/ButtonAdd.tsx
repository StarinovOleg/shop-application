import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

export default function ButtonAdd(props) {
  const {onPress, buttonAlign} = props;
  return (
    <Pressable style={[styles.button, buttonAlign]} onPress={onPress}>
      <Image
        source={require('../../assets/icons/add.png')}
        style={styles.img}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  img: {width: 40, height: 40},
  button: {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
    bottom: 0,
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 9999999999999,
  },
});
