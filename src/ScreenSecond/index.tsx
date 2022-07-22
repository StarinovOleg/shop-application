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
    <View style={styles.viewContainer}>
      <Header
        onPress={onCheckout}
        onPressIn={() => {
          props.navigation.navigate('ScreenOne');
        }}
      />
      <ButtonBack onPress={() => props.navigation.goBack()} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Shop />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#F3D5CE',
    margin: 10,
  },
});
