import React from 'react';

import Header from '../MainLayout/Header';
import {ScrollView, StyleSheet, View} from 'react-native';
import ButtonBack from '../MainLayout/ButtonBack';
import Shop from './Shop';

export default function ScreenSecond(props) {
  const onCheckout = () => {
    props.navigation.navigate('ScreenThree');
  };

  return (
    <View style={styles.backgroundBody}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.viewContainer}>
        <Header
          onPress={onCheckout}
          onPressIn={() => {
            props.navigation.navigate('ScreenOne');
          }}
        />
        <ButtonBack onPress={() => props.navigation.goBack()} />
        <Shop />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundBody: {flex: 1, backgroundColor: '#F9C0E7'},
  viewContainer: {
    backgroundColor: '#F3D5CE',
    margin: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,
  },
});
