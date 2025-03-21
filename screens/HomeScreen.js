import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import AllNotesScreen from './AllNotesScreen';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <TouchableOpacity style={styles.opacity1} onPress={() => navigation.navigate('Add Note')}>
        <Text style={styles.font}>Add New Notes</Text>
        <Icon style={styles.icons} name="arrow-forward-outline" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.opacity2} onPress={()=> navigation.navigate('All Notes')}>
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
   backgroundColor:'lightpink'
  },
  opacity1: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    padding: 50,
    marginLeft: 30,
    marginRight:30,
    elevation:12,
    backgroundColor:'white'
  },
  opacity2: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    padding: 50,
    marginLeft: 30,
    marginRight:30,
    elevation:12,
     backgroundColor:'white'
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
