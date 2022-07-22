import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useContext} from 'react';
import ShopContext from '../Common/ShopContext';
export default function ConstructorFooter(props) {
  const {img, onPressBuyNow} = props;
  const context = useContext(ShopContext);
  const listItems = context.cart.map(cartItem => (
    <View key={cartItem.id}>
      <Image style={styles.picture} source={{uri: cartItem.avatar}} />
    </View>
  ));
  return (
    <View style={styles.container}>
      <View style={styles.blockOne}>
        <Text style={styles.constructorTitle}>Trading Constructor Items</Text>
        <View style={styles.itemBlock}>{listItems}</View>
      </View>
      <View style={styles.blockBetween}>
        <Text style={styles.textContinue}>&gt;</Text>
      </View>
      <View style={styles.blockSecond}>
        <Text style={styles.textBuyNow} onPress={onPressBuyNow}>
          Buy Now
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {height: '35%', position: 'relative', bottom: 0},
  blockOne: {
    backgroundColor: '#333333',
    height: '75%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: 1,
  },
  blockBetween: {
    position: 'absolute',
    backgroundColor: '#333333',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 60,
    width: '50%',
    height: '25%',
    zIndex: 9999,
    right: 0,
    bottom: '1%',
  },
  blockSecond: {
    backgroundColor: '#ff3366',
    height: '25%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
  },
  itemBlock: {
    backgroundColor: '#330033',
    borderRadius: 10,
    borderWidth: 1,
    position: 'absolute',
    top: '40%',
    width: '90%',
    height: 80,
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
  },

  textBuyNow: {
    paddingTop: '1%',
    paddingLeft: '5%',
    color: 'white',
    fontSize: 20,
  },
  textContinue: {
    textAlign: 'center',
    paddingLeft: '5%',
    color: 'white',
    fontSize: 40,
  },
  constructorTitle: {
    color: 'white',
    padding: '10%',
    fontSize: 20,
  },
  picture: {
    borderRadius: 10,
    margin: 2,
    width: 80,
    height: 90,
  },
});
