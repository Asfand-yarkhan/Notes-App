import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AddNote from './screens/AddNote';
import AllNotesScreen from './screens/AllNotesScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const App = () => {
  const [notes, setnotes] = useState([]);
  // Fetch notes from AsyncStorage when the app starts, ye AllNotesScreen pr fetch nhi krwanay chahiye qk
  //hmein ye full app mn updated chahiye ,otherwise ye srf uss screen pr update hon gy.so that hum 'notes' state ko
  //globally use kr sakein
  useEffect(() => {
    const fetchnotes = async () => {
      try {
        const loadnotes = await AsyncStorage.getItem('notes');
        if (loadnotes != null) {
          setnotes(JSON.parse(loadnotes));
        }
      } catch (error) {
        console.log('Data not fetched properly');
      }
    };
    fetchnotes();
  }, []);

  //same goes for add notes

  const addnotes = async(newNotes) => {
    //yahan separately notes ko get krny ki zroort nhi hai qk notes already issi screen pr updated hain
    //const fetchnotes = AsyncStorage.getItem('notes'); //get k liye hum srf key ko pass krte h
    try {
      const updatenotes = [...notes, newNotes]; //old notes k andr hi new notes add kr denge
      setnotes(updatenotes); //notes ki value ko update krna ha
      await AsyncStorage.setItem('notes', JSON.stringify(updatenotes)); //set k liye key and value dono pass krny hoty
      
    } catch (error) {
      console.log('Data not saved properly');
    }
  };
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <HomeScreen {...props} notes={notes} />}
        </Stack.Screen>
        <Stack.Screen name="Add Note">
          {props => <AddNote {...props} addnotes={addnotes} />}
        </Stack.Screen>
        <Stack.Screen name="All Notes">
          {props => <AllNotesScreen {...props} notes={notes} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    // backgroundColor:'pink',
  },
});
export default App;
