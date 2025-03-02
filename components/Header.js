import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
           <Text style={styles.headtext}>Your Sticky Notes</Text>
         </View>
  );
};


const styles = StyleSheet.create({
  header:{
    width: '100%',
    height: '10%',
backgroundColor: 'purple',
paddingTop: 40,
  },
  headtext:{
    fontSize: 25,
    color: 'white',
  fontWeight:'bold',
  }
})
export default Header;