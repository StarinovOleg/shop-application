import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

export default function ButtonRemove(props) {
  const {onPress} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image
        source={require('../../assets/icons/remove.png')}
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
    width: 20,
    height: 20,
    position: 'absolute',
    zIndex: 9999999999999,
  },
  img: {
    width: 20,
    height: 20,
  },
});
