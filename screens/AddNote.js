import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // ✅ AsyncStorage import kiya

const AddNote = ({ onSave }) => {
  const [entertext, settext] = useState(""); // ✅ State to store user input

  // ✅ Text ko update karne ka function
  const updation = (val) => {
    settext(val);
  };

  const onSave =async()=>{
    if (entertext.trim() =="") return ;
    try{
      let existingnotes = await AsyncStorage.getItem('notes');
      existingnotes = existingnotes ? JSON.parse(existingnotes) : [];

      existingnotes.push(entertext);

      await AsyncStorage.setItem('notes' , JSON.stringify(existingnotes));
      onSave();
      settext('');

    }catch(error){
console.log("error");

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
