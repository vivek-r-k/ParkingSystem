import React,{useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Text, TextInput, Alert, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Card, Title } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Info = ({route}) => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(50)
    const handlePress = (cell) => {
        setSelected(cell);
      };
    const selectedSlot = route.params.slot
    //   console.log(selectedSlot);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
      setInputValue(text);
    };

    const handleButtonPress = () => {
      Alert.alert('Input Value', inputValue);
    };

    const SignOutButton = () => {
      const handleSignOut = () => {
        auth()
          .signOut()
          .then(() => console.log('User signed out!'))
          .catch((error) => console.log('Sign-out error:', error));
      };
    
      return (
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={handleSignOut}>
                <Card style={styles.card1}>
                <Card.Content>
                    <Title>Sign Out</Title>
                </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>
      );
    };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{justifyContent:'center', alignContent:'center', flex:1}}>
          <Text style={{justifyContent:'center', alignSelf:'flex-start', margin:'5%', fontSize: 30, fontWeight:'bold'}}>Info</Text>
          <Text style={{justifyContent:'center', alignSelf:'flex-start', marginLeft:'5%', marginTop:'-3%', marginRight:'5%', fontSize: 20}}>
            They offer 24/7 access to our parking lot, we know you may need your vechile at any given point of time while offering a 25 % cashback on the base amount if the parking experience is overwhelmed.
          </Text>
          <Text style={{justifyContent:'center', alignSelf:'flex-start', margin:'5%', fontSize: 30, fontWeight:'bold'}}>Price Tariff</Text>
          <Text style={{justifyContent:'center', alignSelf:'flex-start', marginLeft:'5%', marginTop:'-3%', marginRight:'5%', fontSize: 20}}>
            You can change the duration of booking by selecting any one of the options below
          </Text>

          <Text style={{justifyContent:'center', alignSelf:'flex-start', margin:'5%', fontSize: 25, fontWeight:'bold'}}>Reserve Parking at {selectedSlot}th slot</Text>

          <ScrollView horizontal contentContainerStyle={{ margin:'1%', paddingRight:16 }}>
            <TouchableOpacity onPress={() => handlePress(50)}>
                <Card style={styles.card}>
                    <Card.Content>
                    <Title>1hr - 2hr: 50₹</Title>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(90)}>
                <Card style={styles.card}>
                    <Card.Content>
                    <Title>3hr - 4hr: 90₹</Title>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(170)}>
                <Card style={styles.card}>
                    <Card.Content>
                    <Title>5hr - 8hr: 170₹</Title>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
            </ScrollView>
            
            <View style={styles.cardContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Payment', { slot: selectedSlot, payment: selected, name: inputValue })}>
                      <Card style={styles.card1}>
                        <Card.Content>
                          <Title>Reserve for: {selected}₹</Title>
                        </Card.Content>
                      </Card>
                    </TouchableOpacity>
            </View>
      <SignOutButton />
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
  card: {
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 8,
    marginVertical: 5,
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
    backgroundColor: '#3277D8',
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

export default Info;
