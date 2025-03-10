import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // ✅ AsyncStorage import kiya

const AddNote = ({ onSave }) => {
  const [entertext, settext] = useState(""); // ✅ State to store user input

  // ✅ Text ko update karne ka function
  const updation = (val) => {
    settext(val);
  };

  // ✅ Note save karne ka function (AsyncStorage ka use)
  const saved = async () => {
    if (entertext.trim() === "") return; // ✅ Agar empty string ho to return kar do

    try {
      let existingNotes = await AsyncStorage.getItem('notes'); // ✅ Pehle se stored notes ko get karo
      existingNotes = existingNotes ? JSON.parse(existingNotes) : []; // ✅ JSON me convert karo ya empty array set karo
      
      existingNotes.push(entertext); // ✅ Naya note list me add karo

      await AsyncStorage.setItem('notes', JSON.stringify(existingNotes)); // ✅ Updated list ko AsyncStorage me save karo
      console.log("Saved Notes:", existingNotes); // ✅ Debugging ke liye console me print karo

      onSave(entertext); // ✅ Parent screen ko update karne ka signal do
      settext(''); // ✅ Input field ko empty karo
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={updation}
        placeholder="Write Here"
        value={entertext}
      />
      <View>
        <TouchableOpacity style={styles.Button} onPress={onSave}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ADD Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default AddNote;

const styles = StyleSheet.create({
  input: {
    margin: 30,
    fontSize: 30,
    borderBottomWidth: 2,
  },
  Button: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A5ACD',
    //  width:'100%',
    //  height:60,
    padding: 25,
    elevation: 10,
  },
});
