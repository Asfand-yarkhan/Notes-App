import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const AllNotesScreen = ({ notes }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
       keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 0.4, backgroundColor: 'lightgray', margin: 5 }}>
            <Text style={{ fontSize: 23 }}>{item}</Text>
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
