import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export default function AppButton(props) {
  const {onPress, title = 'Save'} = props;
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
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: '#F3D5CE',
    borderWidth: 1,
    marginTop: '3%',
    borderColor: '#661A0A',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#661A0A',
  },
});
