
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AddNote from './screens/AddNote';
import AllNotesScreen from './screens/AllNotesScreen';

const Stack = createNativeStackNavigator();
const App =()=> {
  return (
    <NavigationContainer>
      <Header/>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name='AddNote' component={AddNote}/>
      <Stack.Screen name='AllNotesScreen' component={AllNotesScreen}/>
    
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};
const styles= StyleSheet.create({
  
    container1:{
flex:1,
// backgroundColor:'pink',
    }
  
})
export default App;
