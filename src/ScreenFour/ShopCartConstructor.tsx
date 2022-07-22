import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ButtonAdd from '../MainLayout/ButtonAdd';

export default function ShopCartConstructor(props) {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <ButtonAdd onPress={onPress} />
      <Image style={styles.picture} source={{uri: props.img}} />
      <Text style={styles.price}>{props.price}</Text>
      <Text style={styles.about}>{props.about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  picture: {
    borderRadius: 10,
    borderWidth: 1,
    margin: 2,
    width: 80,
    height: 100,
  },
});
