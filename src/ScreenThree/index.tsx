import React from 'react';

import Header from '../MainLayout/Header';
import {ScrollView, StyleSheet, View} from 'react-native';
import ButtonBack from '../ScreenSecond/ButtonBack';
export default function ScreenThree(props) {
  const count = 0;
  return (
    <View style={styles.backgroundBody}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.viewContainer}>
        <Header count={count} />
        <ButtonBack onPress={() => props.navigation.goBack()} />
        <View style={styles.buttonContainer}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundBody: {
    backgroundColor: '#F9C0E7',
    flex: 1,
    alignItems: 'center',
  },
  viewContainer: {
    backgroundColor: '#F3D5CE',
    margin: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
});
