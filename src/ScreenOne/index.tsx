import React from 'react';

import Header from '../MainLayout/Header';
import {ScrollView, StyleSheet, View} from 'react-native';
import Title from '../MainLayout/Title';
import Subtitle from '../MainLayout/Subtitle';
import Promo from './Promo';
import AppButton from './ButtonExplore';
import ButtonShop from './ButtonShop';

const textSubtitle =
  ' Flowers for every celebrate. Professional florist with many age experience create beautiful bouquet for every situation.';
const textTitle = 'Flowers That Everyone Loves';
export default function ScreenOne(props) {
  const onPress = () => {
    props.navigation.navigate('ScreenSecond');
  };
  const onPressScreenFour = () => {
    props.navigation.navigate('ScreenFour');
  };
  const onCheckout = () => {
    props.navigation.navigate('ScreenThree');
  };

  return (
    <View style={styles.backgroundBody}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.viewContainer}>
        <Header onPress={onCheckout} />
        <Title textTitle={textTitle} />
        <Subtitle textSubtitle={textSubtitle} />
        <View style={styles.buttonContainer}>
          <AppButton title="Explore" onPress={onPressScreenFour} />
          <ButtonShop title="Shop" onPress={onPress} />
        </View>
        <Promo />
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
    //margin: 10,
    marginTop: 25,
    marginBottom: 25,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
});
