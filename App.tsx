import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './Navigation/Appstack';
import ParkingSlots from './src/ParkingSlots';
import Providers from './src/Authentication/index';

const App = () => {
  return (
    // <NavigationContainer>
    //   <AppStack />
    // </NavigationContainer>
    // <ParkingSlots />
    <Providers />
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

export default App;
