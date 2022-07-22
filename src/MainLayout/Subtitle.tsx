import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Subtitle(props) {
  const {textSubtitle} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textSubtitle}</Text>
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
