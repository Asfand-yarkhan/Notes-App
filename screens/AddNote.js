import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNote = ({addnotes}) => {

  const [entertext, settext] = useState('');

  const savingnotes=()=>
  {
   if(entertext.length>0)
   {
     addnotes(entertext);
     settext('');
   }
   else
   {
     alert('Please enter some text');
   }
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={settext}
        placeholder="Write Here"
        value={entertext}
      />
      <View>
        <TouchableOpacity style={styles.Button} onPress={savingnotes}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>ADD Note</Text>
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
    padding: 25,
    elevation: 10,
  },
});
