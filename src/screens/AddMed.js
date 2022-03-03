import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';

export default function App() {
  return (
  <Fragment>
    <View >
    <Text style={{fontSize:40,color:'#37BC90',marginTop:20,marginLeft:20, fontWeight: 'bold'}}>Add Medicine</Text>
     
    </View>

    <View style={styles.add}>
     <TextInput  placeholder="Medicaction name" style={styles.screen}/>
     <TextInput multiline={true} placeholder="Description" style={styles.screen}/>
     <View style={styles.button}>
     <Button color='#37BC90' title="Cancel" />
     <Button color='#37BC90'title="Save" />
     </View>
    </View>
 </Fragment>

  );
};

const styles = StyleSheet.create({
add:{
flex:1,
justifyContent:'center',
alignItems:'center',
padding:40,
marginTop: 50,
},
screen:{
borderBottomWidth:1,
borderBottomColor:'black',
width:'80%',
padding:20,
margin:4,
fontSize:22,
},
button:{
  flex:1,
  flexDirection:"row",
  height:30,
  justifyContent:"space-between",
  alignItems:"flex-end", 
},
})