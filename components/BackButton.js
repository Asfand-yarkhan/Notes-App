import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const BackButton = () => {
  return (
    <View style={styles.button}>
      <Button title="<BACK"  ></Button>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button:{
    width:'20%',
  }
})