import { View, Text,TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

MyFunction = () => {

  Alert.alert("Add Med Button Clicked");

}

const Medications = () => {
  return (
    
    <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.5} onPress={this.MyFunction} 
            style={styles.TouchableOpacityStyle} >
      <Icon name='plus' size={50} color='#01a699'  style={styles.FloatingButtonStyle} />
    </TouchableOpacity>
  </View>
  )
}

export default Medications

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  TouchableOpacityStyle: {

    position: 'absolute',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 70,
    height: 70,
  }
});