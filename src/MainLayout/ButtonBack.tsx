import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

export default function ButtonBack(props) {
  const {onPress} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image
        source={require('../../assets/icons/back-arrow.png')}
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
    marginLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
  },
});
