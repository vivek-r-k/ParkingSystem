import React,{useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity, Button, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Card, Title } from 'react-native-paper';

const ParkingSlots = ({route}) => {
    const navigation = useNavigation();
    const [tableData, setTableData] = useState([
        ['1', '2'],
        ['3', '4'],
        ['5', '6'],
        ['7', '8'],
        ['9', '10'],
        ['11', '12'],
        ['13', '14'],
        ['15', '16'],
      ]);
      const [selected, setSelected] = useState(null)
    
      const handlePress = (cell) => {
        if (cell !== "Booked") {
            setSelected(cell);
          }
      };

      const handlePress2 = (cell) => {
        if (cell !== "Booked") {
          const updatedTableData = tableData.map(row => {
            if (row.includes(cell)) {
              return row.map(value => (value === cell ? "Booked" : value));
            }
            return row;
          });
      
          setTableData(updatedTableData);
          setSelected(cell);
        }
      };
      

      const renderTableData = () => {
        return tableData.map((row, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
              }}>
              {row.map((cell, cellIndex) => {
                return (
                  <TouchableOpacity
                    key={cellIndex}
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
                      }}
                      onPress={() => handlePress(cell)}
                      >
                    <Text style={{justifyContent:'center', alignSelf:'center',margin:'10%'}}>{cell}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        });
      };
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
        car: {
          width: 10, // Adjust this value to set the width of the image
          height: 10, // Adjust this value to set the height of the image
          resizeMode: 'contain', // This makes the image fit inside the dimensions specified above
        },
        cardContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop:'5%'
        },
        card1: {
          width: 'auto',
          borderRadius: 8,
          backgroundColor: selected ? '#3277D8' : '#FFFFFF',
          // backgroundColor: '#3277D8',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        },
      });
    if(selected == null){
        return(
            <SafeAreaView>
      <Text style={{alignContent: 'center', justifyContent:'center', alignSelf: 'center',fontSize:40, fontWeight:'bold', margin:'5%'}}>Parking Slots</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{justifyContent:'center', alignContent:'center', flex:1}}>
        {renderTableData()}
        <View style={styles.cardContainer}>
            <TouchableOpacity>
                <Card style={styles.card1}>
                <Card.Content>
                    <Title>Park at slot {selected}</Title>
                </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
        )
    }

  return (
    <SafeAreaView>
      <Text style={{alignContent: 'center', justifyContent:'center', alignSelf: 'center',fontSize:40, fontWeight:'bold', margin:'5%'}}>Parking Slots</Text>
      <ScrollView>
        <View style={{justifyContent:'center', alignContent:'center', flex:1}}>
        {renderTableData()}
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => {navigation.navigate('Payment Information', {slot: selected}); handlePress2(selected);}}>
                <Card style={styles.card1}>
                <Card.Content>
                    <Title>Park at slot {selected}</Title>
                </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



export default ParkingSlots;
