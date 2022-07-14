import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export default function ButtonShop(props) {
  const {onPress, title} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 50,
    backgroundColor: '#661A0A',
    borderWidth: 1,
    marginTop: '3%',
    borderColor: 'red',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
