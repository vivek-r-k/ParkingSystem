import React,{useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import ParkingSlots from '../src/ParkingSlots';
import Info from '../src/Info';
import Payment from '../src/Payment';

const Stack = createStackNavigator();

const AppStack = () => {
  // TODO: For onboarding
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // let routeName;

  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then((value) => {
  //     if (value == null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true'); 
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   });
  // }, []);

  // if (isFirstLaunch === null) {
  //   return null; 
  // } else if (isFirstLaunch == true) {
  //   routeName = 'Onboarding';
  // } else {
  //   routeName = 'Home';
  // }
    return (
      <Stack.Navigator>
      <Stack.Screen name="Parking Slots" component={ParkingSlots} options={({route}) => ({
        headerShown: false,
        headerBackTitleVisible: false,
      })}/>
      <Stack.Screen name="Payment Information" component={Info}/>
      <Stack.Screen name="Payment" component={Payment}/>
    </Stack.Navigator>
    );
  };
  

export default AppStack;
