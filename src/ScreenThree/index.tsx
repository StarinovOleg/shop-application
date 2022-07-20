import React from 'react';

import Header from '../MainLayout/Header';
import useAddCustomer from '../hooks/customer-hook';
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Alert,
} from 'react-native';
import ButtonBack from '../ScreenSecond/ButtonBack';
import {useForm, Controller} from 'react-hook-form';
import {useContext} from 'react';
import ShopContext from '../Common/ShopContext';
import ShopCart from './ShopCart';

export default function ScreenThree(props) {
  //const [name, setName] = useState('');
  //const [order, setOrder] = useState('');
  //const [phone, setPhone] = useState('');
  const queryaddemail = useAddCustomer();

  const context = useContext(ShopContext);
  const listItems = context.cart.map(cartItem => (
    <View key={cartItem.id}>
      <Text>{cartItem.title}</Text>
    </View>
  ));
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      phone: '',
      order: context.cart,
    },
  });
  const onSubmit = data => {
    const emp = {...data};
    queryaddemail.mutate(emp);
    Alert.alert('Your order success');
    props.navigation.navigate('ScreenOne');
    reset({...data});
  };

  return (
    <View style={styles.backgroundBody}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.viewContainer}>
        <Header />
        <ButtonBack onPress={() => props.navigation.goBack()} />
        <View style={styles.buttonContainer}>
          <Text style={styles.titlePage}>Your order</Text>
          {context.cart.length <= 0 && <Text>No Item in the Cart!</Text>}
          <View>
            <Text>{listItems}</Text>
          </View>
          <Text style={styles.titleOrder}>Name items: </Text>
          <Text style={styles.titleOrder}>Total price:</Text>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text style={styles.titleOrder}>Your Name:</Text>
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Name"
                />
              </>
            )}
            name="firstName"
          />
          {errors.firstName && <Text>This is empty.</Text>}

          <Controller
            control={control}
            rules={{
              minLength: 10,
              maxLength: 10,
              required: true,
              pattern: {
                value: /\d+/g,
                message: 'Not a valid email',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text style={styles.titleOrder}>Here your number phone:</Text>
                <Text style={styles.titleNotification}>
                  Shop not save your number phone for advise and any use
                </Text>
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Phone"
                />
              </>
            )}
            name="phone"
          />
          {errors.phone && (
            <Text>Here not correct or empty email. Use format: 0123456789</Text>
          )}

          <Button
            title="Submit"
            onPress={handleSubmit(onSubmit)}
            color="#661A0A"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundBody: {
    backgroundColor: '#F9C0E7',
    flex: 1,
  },
  viewContainer: {
    backgroundColor: '#F3D5CE',
    margin: 10,
  },

  buttonContainer: {
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#ededed',
    fontSize: 20,
    margin: 5,
  },
  removeStyleInput: {
    backgroundColor: 'none',
    borderWidth: 0,
  },
  titlePage: {
    fontSize: 40,
    color: '#661A0A',
    padding: 3,
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
  },
  titleOrder: {
    fontSize: 10,
    color: '#661A0A',
    padding: 3,
    fontFamily: 'Poppins-Medium',
  },
  titleNotification: {
    fontSize: 5,
    color: 'red',
    fontFamily: 'Poppins-Medium',
  },
});
