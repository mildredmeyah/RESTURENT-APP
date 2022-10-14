import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './src/screens/components/login';
import Register from './src/screens/components/registation';
import Dashboard from './src/screens/components/home';

// import Profile from './src/screens/Profile';


import { auth } from './src/screens/components/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{
        headerStyle:{
          backgroundColor:'#96DED1'
        }
      
      }}  >
        
        <Stack.Screen name='Login' options={{title:'Login'}}>
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Register' options={{title:'Register'}}>
          {(props) => <Register {...props} />}
        </Stack.Screen> 

        <Stack.Screen name='Home' options={{title:'Home'}}>
          {(props) => <Dashboard {...props} />}
        </Stack.Screen> 

       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight:840,
    maxWidth:1000,
    height:896,
    width:424,
  },
});
