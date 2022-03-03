import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import AddCaretaker from './AddCaretaker';
import MyCaretaker from './MyCaretaker';
import CaretakerRequests from './CaretakerRequests';

const Tab = createMaterialTopTabNavigator();

export default function Caretaker() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Caretaker" component={MyCaretaker} />
      <Tab.Screen name="Requests" component={CaretakerRequests} />
    </Tab.Navigator>
  );
}