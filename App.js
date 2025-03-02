
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import BackButton from './components/BackButton';
import AddNote from './screens/AddNote';

const App =()=> {
  return (
    <View style = {styles.container1}>
      <Header/>
      <BackButton/>
      <HomeScreen/>
    </View>
   
  );
};
const styles= StyleSheet.create({
  
    container1:{
flex:1,
// backgroundColor:'pink',
    }
  
})
export default App;
