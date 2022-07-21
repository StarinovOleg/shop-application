import React, {Fragment, useState} from 'react';
import {View, StyleSheet, Modal, Image} from 'react-native';
import ShopCart from './ShopCart';
import {useContext} from 'react';
import ShopContext from '../Common/ShopContext';
import ButtonBack from './ButtonBack';
export default function Shop() {
  const context = useContext(ShopContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const listItems = context.products?.map(products => (
    <Fragment key={products.id}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalImageContainer}>
            <ButtonBack onPress={() => setModalVisible(!modalVisible)} />
            <Image
              source={{uri: modalData}}
              style={styles.modalPic}
              resizeMode={'center'}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.containerItem}>
        <ShopCart
          price={products.price}
          about={products.product_name}
          img={products.avatar}
          onPress={context.addProductToCart.bind(this, products)}
          onPressSize={() => {
            setModalVisible(!modalVisible);
            setModalData(products.avatar);
          }}
        />
      </View>
    </Fragment>
  ));

  return <View style={styles.container}>{listItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItem: {
    margin: 5,
  },
  modal: {
    backgroundColor: '#F3D5CE',
    flex: 1,
  },
  modalPic: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  modalImageContainer: {
    width: '100%',
    height: '100%',
  },
});
