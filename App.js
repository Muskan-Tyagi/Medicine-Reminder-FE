import { View, Text } from 'react-native'
import React from 'react'
import Medications from './src/screens/Medications'
import HomeScreen from './src/screens/HomeScreen'
import Reminders from './src/screens/Reminders'
import Caretaker from './src/screens/Caretaker'
import Patient from './src/screens/Patient'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import CustomDrawer from './src/components/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddPatient from './src/screens/AddPatient'
import AddCaretaker from './src/screens/AddCaretaker'
import AddMed from './src/screens/AddMed'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <AddPatient/>
    // <AddCaretaker/>
    // <AddMed/>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} initialRouteName="Home" screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#37BC90',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'Roboto-Medium',
          fontSize: 24,
          fontWeight: 'bold',
        },
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon: ({color}) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}/>
        <Drawer.Screen name="Medications" component={Medications} options={{
          drawerIcon: ({color}) => (
            <Icon name="pills" size={24} color={color} />
          ),
        }}/>
        <Drawer.Screen name="Reminders" component={Reminders} options={{
          drawerIcon: ({color}) => (
            <Icon name="clock" size={24} color={color} />
          ),
        }}/>
        <Drawer.Screen name="Caretaker" component={Caretaker} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="man" size={24} color={color} />
          ),
        }}/>
        <Drawer.Screen name="Patient" component={Patient} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="man" size={24} color={color} />
          ),
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App