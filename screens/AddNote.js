import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const AddNote = ({ onSave }) => {
  const [entertext, settext] = useState("");

  const updation = (val) => {
    settext(val);
  };

  const onSaveNote = () => {
    if (entertext.trim() == "") return;
    onSave(entertext);
    settext('');
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
        <TouchableOpacity style={styles.Button} onPress={onSaveNote}>
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
    padding: 25,
    elevation: 10,
  },
});