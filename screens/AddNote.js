import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNote = () => {
  const [entertext, settext] = useState('');


  const onSaveNote = async() => {
      try {
        const data = await AsyncStorage.getItem('notes');
        if (data != null) {
          const notes = JSON.parse(data);
          notes.push(entertext);
          await AsyncStorage.setItem('notes', JSON.stringify(notes));
          settext('');
        } else {
          const notes = [entertext];
          await AsyncStorage.setItem('notes', JSON.stringify(notes));
          settext('');
        }
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={settext}
        placeholder="Write Here"
        value={entertext}
      />
      <View>
        <TouchableOpacity style={styles.Button} onPress={onSaveNote}>
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
