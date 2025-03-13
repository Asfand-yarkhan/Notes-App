import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const AllNotesScreen = ({ notes }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.noteContainer}>
            <Text style={styles.indexText}>{index + 1}:</Text>
            <Text style={styles.noteText}>{item}</Text>
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
  noteContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  indexText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  noteText: {
    fontSize: 23,
  },
});
