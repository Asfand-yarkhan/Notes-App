import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllNotesScreen = () => {
  const [notes, setNotes] = useState([]); // ✅ State to store notes

  // ✅ Fetch notes from AsyncStorage
  useEffect(() => {
    const getNotes = async () => {
      try {
        let savedNotes = await AsyncStorage.getItem('notes'); // ✅ Get saved notes
        savedNotes = savedNotes ? JSON.parse(savedNotes) : []; // ✅ Convert to array
        setNotes(savedNotes); // ✅ Update state
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    getNotes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes} // ✅ List me notes show karne ke liye
        keyExtractor={(item, index) => index.toString()} // ✅ Unique key assign ki
        renderItem={({ item }) => (
          <View style={{flex:.4,backgroundColor:'lightgray',margin:5}}>
            <Text style={{fontSize:23}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AllNotesScreen

const styles = StyleSheet.create({})