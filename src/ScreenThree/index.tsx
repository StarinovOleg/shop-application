import React from 'react';

import Header from '../MainLayout/Header';
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
} from 'react-native';
import ButtonBack from '../ScreenSecond/ButtonBack';
import {useForm, Controller} from 'react-hook-form';
export default function ScreenThree(props) {
  const count = 0;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      phone: '',
    },
  });
  const onSubmit = data => console.log(data);
  return (
    <View style={styles.backgroundBody}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.viewContainer}>
        <Header count={count} />
        <ButtonBack onPress={() => props.navigation.goBack()} />
        <View style={styles.buttonContainer}>
          <Text style={styles.titlePage}>Your order:</Text>
          <Text style={styles.titleOrder}>Name items:</Text>
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
  titlePage: {
    fontSize: 20,
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
