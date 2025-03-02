import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
  return (
    <View style={styles.container1}>
      <TouchableOpacity style={styles.opacity1}>
        <Text style={styles.font}>Add New Notes</Text>
        <Icon style={styles.icons} name="arrow-forward-outline" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.opacity2}>
        <Text style={styles.font}>View All Notes</Text>
        <Icon style={styles.icons} name="arrow-forward-outline"/>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
justifyContent:'space-evenly',
    alignContent: 'center',
   
  },
  opacity1: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    padding: 50,
    marginLeft: 30,
    marginRight:30,
    elevation:3,
  },
  opacity2: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    padding: 50,
    marginLeft: 30,
    marginRight:30,
    elevation:3,
  },
  font: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  icons:{
    fontSize:30,
    marginTop:20,
    marginHorizontal:90,
  }
});
