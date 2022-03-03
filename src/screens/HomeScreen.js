import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react'

const HomeScreen = ({navigation}) => {
  medicationsPressed = ()=>{
    Alert.alert("Feature coming soon")
  }

  reminderPressed = ()=> {
    Alert.alert("Feature coming soon")
  }
    return (
       <View style={{ backgroundColor: '#fff',height:'100%',width:'100%'}}>
          <TouchableOpacity 
            onPress={this.medicationsPressed}
          >
            <Text style={styles.medications}>Medications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.reminderPressed}
          >
            <Text style={styles.reminder}>Reminder</Text>
          </TouchableOpacity>
        </View>
    );
  }


export default HomeScreen

const styles = StyleSheet.create({
    medications: {
      backgroundColor: '#37BC90',
      color: 'white',
      width: "75%",
      borderRadius: 27,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  34,
      marginTop: '60%'
    },
    reminder: {
      backgroundColor: '#37BC90',
      color: 'white',
      width: "75%",
      borderRadius: 27,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  34,
      marginTop: '8%'
    }
});