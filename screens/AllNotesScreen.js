import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllNotesScreen = ({notes}) => {
  const ViewNotes = async () => {
    try {
      const response = await AsyncStorage.getItem('notes');
      if (response != null) {
        const notes = JSON.parse(response);
      } else {
        console.log('No notes found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{flex: 0.4, backgroundColor: 'lightgray', margin: 5}}>
            <Text style={{fontSize: 23}}>{item.index}</Text>
            <Text style={{fontSize: 23}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AllNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
