import React,{useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from './SignIn'
import SignUp from './SignUp'
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator()
const AuthStack = () => {
      // useEffect(() => {
      //   GoogleSignin.configure({
      //     webClientId: '307636872848-32rlu01vvghn97ed1pbj8gs0s683nglp.apps.googleusercontent.com',
      //   });
      // }, []);

    return(
        <Stack.Navigator>
            <Stack.Screen 
              name='SignUp'
              component={SignUp}
              options={() => ({
                headerShown: false,
                headerBackTitleVisible: false,
              })}
            />
            <Stack.Screen 
              name='SignIn'
              component={SignIn}
              options={() => ({
                headerShown: false,
                headerBackTitleVisible: false,
              })}
            />
            
        </Stack.Navigator>
    )
}

export default AuthStack