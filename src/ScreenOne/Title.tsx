import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Title() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Flowers That Everyone Loves</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: '#661A0A',
    padding: 3,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});
