import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Title(props) {
  const {textTitle} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    padding: 3,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});
