import React,{useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Payment = ({route}) => {
  const navigation = useNavigation();

  const p_ayment = route.params.payment;
  const s_lot = route.params.slot;
  const Name = route.params.name

  // console.log(Name);

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const currentDay = currentDate.getDate();

  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  // console.log(`Current Date: ${currentDay}/${currentMonth}/${currentYear}`);
  // console.log(`Current Time: ${currentHour}:${currentMinute}:${currentSecond}`);

  const [email, setEmail] = useState('');

  useEffect(() => {
    // Get the currently authenticated user
    const currentUser = auth().currentUser;
    
    if (currentUser) {
      // Extract the part of the email before '@'
      const emailParts = currentUser.email.split('@');
      const emailBeforeAt = emailParts[0];
      
      // Set the email state
      setEmail(emailBeforeAt);
    }
  }, []);

  const addUserToRTDB = () => {
    database()
      .ref(`${email}`)
      .push() // Generate a unique key for the new data
      .set({
        Slot_booked: s_lot,
        Payment: p_ayment,
        date: `${currentDay}/${currentMonth}/${currentYear}`,
        time: `${currentHour}:${currentMinute}:${currentSecond}`
      })
      .then(() => {
        console.log('Details added to RTDB!');
      })
      .catch((error) => {
        console.log('Error adding user to RTDB:', error);
      });
  };
  
  // console.log("Payment: ",p_ayment);
  // console.log("Slot: ",s_lot);
  
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{justifyContent:'center', alignContent:'center'}}>
        <TouchableOpacity
          style={{
              flex: 1,
              padding: 10,
              borderRadius: 8,
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
              borderRightWidth: 1,
              borderRightColor: 'grey',
              margin:'5%'
            }}
            onPress={() => {addUserToRTDB(); navigation.navigate('Parking Slots')}}
            >
          <Text style={{justifyContent:'center', alignSelf:'center',margin:'10%'}}>Done Payment</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Payment;
