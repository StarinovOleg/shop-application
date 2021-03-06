import React from 'react';

import Header from '../MainLayout/Header';
import ButtonBack from '../MainLayout/ButtonBack';
import {ScrollView, StyleSheet, View} from 'react-native';
import Title from '../MainLayout/Title';
import Subtitle from '../MainLayout/Subtitle';
import ShopConstructor from './ShopConstructor';

const textTitle = 'Chose components';
const textSubtitle =
  'In our new store you can create your own bouquet, just the way you want';
export default function ScreenFour(props) {
  /** const onPress = () => {
    props.navigation.navigate('ScreenSecond');
  };

*/
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
        <Title textTitle={textTitle} />
        <Subtitle textSubtitle={textSubtitle} />
        <ShopConstructor />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#F3D5CE',
    margin: 10,
  },
  /**
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  }, */
});
