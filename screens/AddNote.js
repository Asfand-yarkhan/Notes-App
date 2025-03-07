import { StyleSheet, Text, View ,TextInput, Button, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'


const AddNote = () => {
  const [entertext,settext] = useState("");
  const updation=(val)=>{
    settext(val);
  }
  const saved=()=>{
console.log(entertext);
settext('');

  }
  return (
    <View>
      <TextInput style={styles.input} onChangeText={updation}
      placeholder='Write Here'
      value={entertext}
      />
      <View >
      <TouchableOpacity style={styles.Button} onPress={saved} >
        <Text style={{fontSize:20 , fontWeight:'bold'}}>ADD Notes</Text>
      </TouchableOpacity>
      </View>
     
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  input:
  {
    margin:30,
    fontSize:30,
borderBottomWidth:2,
  },
  Button:{
    margin:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6A5ACD',
  //  width:'100%',
  //  height:60,
  padding:25,
  elevation:10
  },
})