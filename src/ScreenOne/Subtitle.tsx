import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Subtitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Flowers for every celebrate. Professional florist with many age
        experience create beautiful bouquet for every situation.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: {
    fontSize: 16,
    color: '#661A0A',
    padding: 3,
    textAlign: 'center',
  },
});
